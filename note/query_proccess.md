```sql
show databases;

use myproject;

show tables;

show variables;

# 커넥션 최대값 바꾸기
set global max_connections= 15;

# 지금 연결된 커넥션 갯수  보여줘(Tread_connected)
show status;
# 현재 연결된 커넥션 목록 보여줘
show processlist;

#커넥션 끊어줘(kill 커넥션ID)
kill 28;

```
