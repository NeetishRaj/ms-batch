CREATE TABLE [employees_db].[dbo].Departments (
	Type varchar(50) PRIMARY KEY ,
	Strength int NOT NULL,
	Head varchar(50) NOT NULL,
	Building varchar(50) NULL
);


INSERT INTO [employees_db].[dbo].Departments 
VALUES 
	('Engineering', 300, 'Ramesh', 'Builing 5'),
	('Finance', 20, 'Sunidhi', NULL),
	('Accounts', 54, 'Rajesh', 'Building 3');

SELECT * FROM [employees_db].[dbo].Departments;