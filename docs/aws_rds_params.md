# Correct values for parameters for Postgres AWS RDS database instances

Default values for Postgres DB instances in AWS RDS are not optimal, so when you're creating a new instance, please use
the values below (shared_buffers and effective_cache_size defaults are currently well set, but these two settings are so
crucial, that at least they should be verified and/or set manually, because defaults can change some day).
They have huge impact on DB performance, so also on the bill paid to AWS.

| Parameter Name            | Value                         | Additional notes                                  |
|---------------------------|-------------------------------|---------------------------------------------------|
| shared_buffers            | {DBInstanceClassMemory/32768} | 1/4 of memory (value in 8kB blocks)               |
| effective_cache_size      | {DBInstanceClassMemory/16384} | 1/2 of memory (value in 8kB blocks)               |
| maintenance_work_mem      | {DBInstanceClassMemory/16384} | 1/16 of memory (value in 1kB blocks)              |
| autovacuum_work_mem       | {DBInstanceClassMemory/16384} | 1/16 of memory (value in 1kB blocks)              |
| work_mem                  | {DBInstanceClassMemory/65536} | 1/64 of memory (value in 1kB blocks); see * below |
| random_page_cost          | 1.1                           | assuming SSD disk is used                         |
| effective_io_concurrency  | 200                           | assuming SSD disk is used                         |

\* work_mem is tricky, because it is per operation in a single query, so if you have a query with multiple operations and
  many DB connections doing simultaneous queries it is easy to cause OOM. So this value should be set with caution, and
  individually for each database, but the default value is too low for most use cases while 1/64 is a good compromise between
  performance and safety.

Additional notes:
 * for large analytical queries -> scale up, mostly work_mem
 * for small instances (e.g. <2GB RAM) -> scale down, especially for burstable classes (db.t)
