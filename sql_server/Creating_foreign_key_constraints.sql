--ALTER TABLE Orders
--	ADD CONSTRAINT FK_Orders_Employees FOREIGN KEY(EmployeeID)
--		REFERENCES Employees (EmployeeID);


-- Now we have create a relation between Orders & Employees table
-- So because of this relation the inserts and Updates wll happen properly

--INSERT INTO Orders VALUES 
--	( 10, 67, 1000, '2001-01-01', 3);

-- So above query will fail because there is no Employee with EmployeeID= 1000 in Employees table

-- To make it work we have to provide the EmployeeID of existing employee in EMployees table
INSERT INTO Orders VALUES 
	( 10, 67, 4, '2001-01-01', 3);
