# Correct values for parameters for Postgres AWS RDS database instances

Default values for Postgres DB instances in AWS RDS are not optimal, so when you're creating a new instance, please use the values below (shared\_buffers and effective\_cache\_size defaults are currently well set, but these two settings are so crucial, that at least they should be verified and/or set manually, because defaults can change some day).
They have huge impact on DB performance, so also on the bill paid to AWS.

| Parameter Name             | Value                         | Additional notes                                   |
| -------------------------- | ----------------------------- | -------------------------------------------------- |
| shared\_buffers            | {DBInstanceClassMemory/32768} | 1/4 of memory (value in 8kB blocks)                |
| effective\_cache\_size     | {DBInstanceClassMemory/16384} | 1/2 of memory (value in 8kB blocks)                |
| maintenance\_work\_mem     | {DBInstanceClassMemory/16384} | 1/16 of memory (value in 1kB blocks)               |
| autovacuum\_work\_mem      | {DBInstanceClassMemory/16384} | 1/16 of memory (value in 1kB blocks)               |
| work\_mem                  | {DBInstanceClassMemory/65536} | 1/64 of memory (value in 1kB blocks); see \* below |
| random\_page\_cost         | 1.1                           | assuming SSD disk is used                          |
| effective\_io\_concurrency | 200                           | assuming SSD disk is used                          |

\* work\_mem is tricky, because it is per operation in a single query, so if you have a query with multiple operations and many DB connections doing simultaneous queries it is easy to cause OOM.
So this value should be set with caution, and individually for each database, but the default value is too low for most use cases while 1/64 is a good compromise between performance and safety.

Additional notes:

- for large analytical queries -> scale up, mostly work\_mem
- for small instances (e.g. <2GB RAM) -> scale down, especially for burstable classes (db.t)
