create user 'root'@'%' identified with mysql_native_password by '1234';
grant all privileges on *.* to 'root'@'%';

CREATE DATABASE testing;
use testing;

CREATE TABLE app_names(
		id int primary key,
		name varchar(100)
		);

CREATE TABLE exec_time(
		cid int,
		start int,
		end int,
		dtime datetime,
		foreign key (cid) references app_names(id) on update cascade on delete cascade
		);

INSERT INTO app_names VALUES (0, "Youtube");
INSERT INTO app_names VALUES (1, "Naver");
INSERT INTO app_names VALUES (2, "Kakao");


INSERT INTO exec_time VALUES (0, 2000, 3000, "2021-08-09 18:32:22");
INSERT INTO exec_time VALUES (1, 5443, 6054, "2021-08-09 21:02:00");
INSERT INTO exec_time VALUES (2, 3343, 6544, "2021-08-10 03:21:03");
INSERT INTO exec_time VALUES (0, 0002, 10293, "2021-08-11 07:52:12");
