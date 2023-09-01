Drop table if exists FirmTable;
Drop table if exists FirmTable;
Drop table if exists PersonTable;
Create Table FirmTable(id INT, Legal_Name VARCHAR(200));
Create Table PersonTable(id INT, firm_id INT, lastName VARCHAR(200), firstName VARCHAR(200));
Insert into FirmTable (id, Legal_Name) values (1, 'FirmX');
Insert into PersonTable (id, firm_id, lastName, firstName) values (1, 1, 'John', 'Doe');
