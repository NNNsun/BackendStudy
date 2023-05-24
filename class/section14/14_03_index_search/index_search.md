```sql
# 데이터 전체 갯수 확인
select count(*) from board
;
# 쿼리 검색 속도 비교

select *
 from board
	 where title ='0.2000058593228514'
 ;
 select *
	 from board
	 where number =91
 ;

# 옵티마이저 실행계획 확인
explain
	select *
	 from board
	 where title ='0.2000058593228514'
 ;
explain
	 select *
	 from board
	 where number =91
 ;

# 인덱스 확인
show index from board
;

# 인덱스생성
create index idx_title on board(title)
;

# 인덱스 확인
show index from board
;

# 옵티마이저 실행계획 확인
explain
	select *
	 from board
	 where title ='0.2000058593228514'
 ;

#인덱싱된 컬럼으로 재쿼리 후 성능 비교
	select *
	 from board
	 where title ='0.2000058593228514'
 ;



```
