create table TEST(a int);
insert into TEST values(1);
insert into TEST values(2);

drop table if exists FIRM;
create table FIRM(ID INTEGER, LEGAL_NAME VARCHAR(200));
insert into FIRM(ID, LEGAL_NAME) values(100, 'ACME Corp.');
insert into FIRM(ID, LEGAL_NAME) values(200, 'Monsters Inc.');

drop table if exists PERSON;
create table PERSON(ID INTEGER, FIRMID INTEGER, FIRST_NAME VARCHAR(200), LAST_NAME VARCHAR(200));
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(1, 100, 'Road', 'Runner');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(2, 100, 'Wile', 'Coyote');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(3, 200, 'Jake', 'Sullivan');
insert into PERSON(ID, FIRMID, FIRST_NAME, LAST_NAME) values(4, 200, 'Mike', 'Wazwoski');
