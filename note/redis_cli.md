```Bash
 sun ☀️    ~/dev_node/BackendStudy/class/section14/14_04_redis/backend   main
 docker ps
CONTAINER ID   IMAGE          COMMAND                   CREATED          STATUS          PORTS                    NAMES
59ebcdbb3708   redis:latest   "docker-entrypoint.s…"   31 seconds ago   Up 31 seconds   0.0.0.0:6379->6379/tcp   backend-my-redis-1
 sun ☀️    ~/dev_node/BackendStudy/class/section14/14_04_redis/backend   main
 docker exec -it 59ebcdbb3708 /bin/bash
root@59ebcdbb3708:/data# redis-cli
127.0.0.1:6379> keys *
(empty array)
127.0.0.1:6379> set qqq apple
OK
127.0.0.1:6379> get qqq
"apple"
127.0.0.1:6379> ttl qqq
(integer) -1
127.0.0.1:6379> expire qqq 20
(integer) 1
127.0.0.1:6379> ttl qqq
(integer) 9
127.0.0.1:6379> ttl qqq
(integer) 7
127.0.0.1:6379> ttl qqq
(integer) 4
127.0.0.1:6379> ttl qqq
(integer) -2
127.0.0.1:6379> ttl qqq
(integer) -2
127.0.0.1:6379> keys *
(empty array)

```
