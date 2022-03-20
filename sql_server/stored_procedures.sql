/*
Stored procedured are basically some sql statements that are stored 
in the database itself and can be executed manually
*/

--CREATE PROCEDURE procedure_name
--AS
--sql_statement
--GO;

-- to execute the stored procedude we use EXEC command

-- EXEC  procedure_name

--The following SQL statement creates a stored procedure named 
--"SelectAllCustomers" that selects all records from the "Customers"

--CREATE PROCEDURE SelectAllCustomers
--AS
--SELECT * FROM Customers
--GO;

EXEC SelectAllCustomers;