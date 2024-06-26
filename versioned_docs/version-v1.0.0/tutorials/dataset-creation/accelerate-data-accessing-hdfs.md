---
sidebar_label: Accelerate Data Accessing (via HDFS interface)
sidebar_position: 2
---

# Accelerate Data Accessing (via HDFS interface)

This tutorial introduces how to use HDFS Client to access remote files by [Alluxio](https://www.alluxio.io) in Fluid, and it can accelerate the access of remote files powered by the file cache ability of Alluxio.

## Prerequisites
Before everything we are going to do, please refer to [Installation Guide](/docs/get-started/installation) to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:
```shell
$ kubectl get pod -n fluid-system
NAME                                  READY   STATUS    RESTARTS   AGE
alluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h
csi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h
csi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h
dataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h
```

## Set Up Workspace
```shell
$ mkdir <any-path>/hdfs
$ cd <any-path>/hdfs
```

## Install Resources to Kubernetes

**Check the `Dataset` object to be created**
```shell
$ cat<<EOF >dataset.yaml
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: hadoop
spec:
  mounts:
    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/core/current/
      name: hadoop
EOF
```

Here, we'd like to create a resource object with kind `Dataset`. `Dataset` is a Custom Resource Definition(CRD) defined by Fluid and used to tell Fluid where to find all the data you'd like to access.
Under the hood, Fluid uses Alluxio to do some mount operations, so `mountPoint` property can be any legal UFS path acknowledged by Alluxio. Here, we use [WebUFS](https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html) for its simplicity.

**Create a Dataset resource object**

```shell
$ kubectl create -f dataset.yaml
dataset.data.fluid.io/hadoop created
```

**Inspect the status of the Dataset resource object**

```shell
$ kubectl get dataset hadoop
NAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
hadoop                                                                  NotBound   1m
```

As shown above, the value of attribute `phase` in `status` is `NotBound`, which means that the `Dataset` resource object is not binded with any `AlluxioRuntime` resource object currently. Next, we will create an `AlluxioRuntime` resource object.

**Inspect the AlluxioRuntime resource object to be created**

```shell
$ cat<<EOF >runtime.yaml
apiVersion: data.fluid.io/v1alpha1
kind: AlluxioRuntime
metadata:
  name: hadoop
spec:
  replicas: 2
  tieredstore:
    levels:
      - mediumtype: MEM
        path: /dev/shm
        quota: 2Gi
        high: "0.95"
        low: "0.7"
```

**Create an AlluxioRuntime resource object**

```shell
$ kubectl apply -f runtime.yaml
alluxioruntime.data.fluid.io/hadoop created
```

**Inspect the status of the AlluxioRuntime resource object**

`AlluxioRuntime` is a CRD defined by another Fluid. An `AlluxioRuntime` resource object describes configuration information needed by running an Alluxio instance in a Kubernetes cluster.

Wait until each component in the AlluxioRuntime resource object starts successfully, and you will see status like the following:

```shell
$ hdfs kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
hadoop-master-0                 2/2     Running   0          106s
hadoop-worker-0                 2/2     Running   0          64s
hadoop-worker-1                 2/2     Running   0          64s
```

```shell
$ kubectl get alluxioruntime hadoop
NAME     MASTER PHASE   WORKER PHASE   FUSE PHASE   AGE
hadoop   Ready          Ready          Ready        116s
```

Inspect the status of the Dataset again, and you will find that it has been binded with AlluxioRuntime.

```shell
$ kubectl get dataset hadoop
NAME     UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
hadoop   390.2MiB         0B       4GiB             0%                  Bound   55m
```


When the Dataset resource object is prepared, i.e. has been binded with an Alluxio instance, PV and PVC related to the resource object has been generated by Fluid. Via the PVC, applications are able to mount remote files in Pod, and enable remote file access by mounting directories.

## Access files through HDFS Client

**Prepare test program**

This example uses HDFS Java Client to access files, and the following dependencies need to be introduced when writing client code

```xml
<dependency>
  <groupId>org.apache.hadoop</groupId>
  <artifactId>hadoop-client</artifactId>
  <version>${hadoop.version}</version>
</dependency>
<dependency>
  <groupId>org.apache.hadoop</groupId>
  <artifactId>hadoop-hdfs</artifactId>
  <version>${hadoop.version}</version>
</dependency>
<dependency>
  <groupId>org.alluxio</groupId>
  <artifactId>alluxio-core-client</artifactId>
  <version>${alluxio.version}</version>
  <type>pom</type>
</dependency>
<dependency>
  <groupId>org.alluxio</groupId>
  <artifactId>alluxio-core-client-hdfs</artifactId>
  <version>${alluxio.version}</version>
</dependency>
```

At the same time, add the configuration of alluxio in core-site.xml. For details and troubleshooting, please refer to [Running Hadoop MapReduce on Alluxio](https://docs.alluxio.io/os/user/stable/en/compute/Hadoop-MapReduce.html)。

```xml
<property>
  <name>fs.alluxio.impl</name>
  <value>alluxio.hadoop.FileSystem</value>
  <description>The Alluxio FileSystem</description>
</property>
```

When accessing files through the HDFS client, you need to specify the HDFS server address

```java
final String HDFS_URL = "alluxio://hadoop-master-0.default.svc.cluster.local:"+ System.getenv("HADOOP_PORT") + "/hadoop";
Configuration conf = new Configuration();
FileSystem fs = FileSystem.get(URI.create(HDFS_URL), conf);
```

Note that the HDFS_URL domain name rule here is:

```shell
alluxio://{HCFS URL}/{DATASET_NAME}
```

Where DATASET_NAME is the name of the Dataset created earlier, in this case it is hadoop. The Endpoint can be obtained through the following command to obtain the HCFS (Hadoop Compatible FileSystem) URL

```shell
 kubectl get datasets.data.fluid.io -owide
NAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   HCFS URL                                 AGE
hbase   443.49MiB        0.00B    4.00GiB          0.0%                Bound   alluxio://hbase-master-0.default:19998   97s
```
For the complete test code, please refer to [samples/hdfs](https://github.com/fluid-cloudnative/fluid/tree/master/samples/hdfs). We made the test code into a mirror to facilitate the next test. The mirror address is registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.2.0

**The test program to be created**

```shell
$ cat<<EOF >app.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: fluid-hdfs-demo
spec:
  template:
    spec:
      restartPolicy: OnFailure
      containers:
        - name: fluid-hdfs-demo
          image: registry.cn-hangzhou.aliyuncs.com/qiulingwei/fluid-hdfs-demo:1.3.0
          imagePullPolicy: Always
          env:
          - name: HADOOP_PORT
            value: "19998"
EOF
```
Here, you need to replace 19998 in the environment variable with the actual port in the HCFS (Hadoop Compatible FileSystem) URL just queried

**Start the test program**

```shell
$ kubectl apply -f app.yaml
job.batch/fluid-hdfs-demo created
```

In the test program, we first traverse the Dataset to see which files are there, and then copy these files to the local to see the acceleration effect of accessing remote files.

Wait for a period of time, after the job is completed, the running status of the job can be viewed by the following command:

```shell
$ kubectl get pods
NAME                            READY   STATUS      RESTARTS   AGE
fluid-hdfs-demo-8q9b7           0/1     Completed   0          14m
```

**Check the execution time**

```shell
$ kubectl logs fluid-hdfs-demo-8q9b7
## RELEASENOTES.md
## hadoop-3.1.3-src.tar.gz
## CHANGES.md
## hadoop-3.1.3-site.tar.gz
## hadoop-3.1.3-rat.txt
## hadoop-3.1.3.tar.gz
copy directory cost:67520ms
```

It took more than 67 seconds to execute the job for the first time.

**Check status of the `Dataset` object**

```shell
$ kubectl get dataset hadoop
NAME     UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
hadoop   390.2MiB         388.4MiB   4GiB             99%                 Bound   88m
```

We can see that all remote files have been cached in Alluxio.

**Launch a test job again**

```shell
$ kubectl delete -f app.yaml
$ kubectl create -f app.yaml
```

Since the remote files have been cached, the time consumption of this job is greatly reduced.

```shell
$ kubectl logs fluid-hdfs-demo-pxt45
## RELEASENOTES.md
## hadoop-3.1.3-src.tar.gz
## CHANGES.md
## hadoop-3.1.3-site.tar.gz
## hadoop-3.1.3-rat.txt
## hadoop-3.1.3.tar.gz
copy directory cost:1300ms
```

We repeat the job, taking only 1.3 seconds to access the same file.

This great acceleration effect is attributed to the powerful caching capability provided by Alluxio. This caching capability means that as long as you access a remote file once, the file will be cached in Alluxio,and all your subsequent repeated accesses no longer require remote file reading, but obtain data directly from Alluxio, so it is not difficult to explain the acceleration of data access.

## Clean Up Environment

```shell
$ kubectl delete -f .
```
