```sql
show databases
;
use myproject
;
show tables
;
desc product
;
select *
from product
;
insert into product(id, name, description, price)
			values(uuid(),'츄르', '정말 맛있는 쥬르에요!', 15000)
;
insert into product(id, name, description, price)
			values(uuid(),'햄스터챗바퀴', '정말 꿀잼!', 2000)
;
insert into product(id, name, description, price)
			values(uuid(),'팬돌이', '드셔보셔요!', 1000)
;
delete from product
 where name='츄르'
;
update product
   set price = 18000
 where name ='팬돌이'
;

# ======== JOIN ========
select *
 from product_saleslocation
;
insert into product_saleslocation (id, address, addressDetail, lat, lng, meetingTime)
							values(uuid(),'수성구','사월동에있는우리집',59.014041,128.457393, '2023-05-17')
;

update product
   set productSaleslocationId = '9d72059a-f49e-11ed-848c-1262b76cf99d'
 where name ='햄스터챗바퀴'
 ;

select p.id, name, price, address, addressDetail as '상세주소'
  from product p, product_saleslocation ps
 where p.productSaleslocationId =ps.id
;
# ========== 추가 기능 =====

update product
   set isSoldout = true
 where name ='팬돌이'
   and price = 18000
;
update product
   set isSoldout = false
 where name ='팬돌이'
   or price = 18000
;

# ========= 주석 쉽게 다는 방법 =======

select *
  from product p
 where 1 = 1 # update, delete 문에선 사용하면 절대 안됌!!!
   and name = '팬돌이'
 --  and price = 18000
   and isSoldout =false

```
