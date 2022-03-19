-- USE w3_db dataset to solve all the queries

-- QUERY 1
-- WAQ to find the date of first order ever placed?
SELECT min(OrderDate) from Orders


-- QUERY 2
-- WAQ to  find out how many orders have been placed by the customer named 'Bon app'
SELECT CustomerID
FROM Customers
WHERE CustomerName='Bon app'

-- result of above is x

SELECT *
FROM Orders
WHERE CustomerID=x;

-- OR

SELECT count(OrderDate) 
from Orders 
INNER JOIN Customers 
ON Orders.CustomerID = Customers.CustomerID 
Where CustomerName ='Bon app';

-- Query 3
-- WAQ to find the full names of 3 oldest employees
SELECT TOP(3) FirstName, LastName, BirthDate 
FROM Employees
ORDER BY BirthDate ASC


-- Query 4
-- WAQ to find the count of all the orders placed between 1996-Jan to 1997-Jan
SELECT COUNT(*) 
FROM Orders
WHERE OrderDate BETWEEN '1996-01-01' AND '1997-01-01'

-- Query 5
-- WAQ to get the complete Postal address of all Suppliers residing in USA in a single column of comma separated values.
-- Example
--   Postal Address: "Exotic Liquid, Charlotte Cooper, 49 Gilbert St., Londona, (171) 555-2222"
SELECT CONCAT( Address,',' ,City,',' ,PostalCode) 
FROM Suppliers
WHERE Country = 'USA';


-- Query 6
-- WAQ to list the total no of 'Changs' sold by utizing two tables Products & OrderDetails 
SELECT SUM(Quantity)
FROM OrderDetails INNER JOIN Products ON OrderDetails.ProductID = Products.ProductID
WHERE ProductName='Chang';


-- Query 7 
-- WAQ to create a report with 3 columns (ProductID, ProductName, Total Units Sold)
-- and list all the total units of products sold
-- Utilize 'Products' and 'OrderDetails' to get this info.
-- Example
-- ProductID        ProductName     Total Units Sold
-- 1                Chang           280

