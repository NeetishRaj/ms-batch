--SELECT *
--FROM Orders, Customers;


--SELECT *
--FROM Orders, Customers
--WHERE Orders.CustomerID = Customers.CustomerID;

-- We can be specific in which columns to select from either table
--SELECT Orders.OrderID, Customers.CustomerID, Customers.CustomerName
--FROM Orders, Customers
--WHERE Orders.CustomerID = Customers.CustomerID;

-- Inner join
-- WAQ to select all orders with customers information(It should have matching customerID with Customers table)
--SELECT Orders.OrderID, Customers.CustomerName
--FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;



-- Double inner join
-- WAQ to selects all orders with customer and shipper information

--SELECT OrderID, Customers.CustomerID, Shippers.ShipperID
--FROM ((Orders 
--INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) 
--INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);




-- LEFT JOIN

-- WAQ to select all customers and any order they MIGHT HAVE
--SELECT Customers.CustomerName, Orders.OrderID
--FROM Customers
--LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
--ORDER BY Customers.CustomerName;

-- Below query could have worked for us if we didn't have this "MIGHT HAVE" in question
-- WAQ to list all customers with orders
--SELECT CustomerName, Orders.OrderID
--FROM Customers, Orders
--WHERE Customers.CustomerID = Orders.CustomerID;





-- RIGHT Join
-- Write an SQL query to return all records from the right table (Employees), even if there are no matches in the left table (Orders).
--SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
--FROM Orders
--RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
--ORDER BY Orders.OrderID;


-- Full OUTER JOIN | OUTER JOIN
-- WAQ to select all Customers and all Orders
--SELECT Customers.CustomerName, Orders.OrderID
--FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
--ORDER BY Customers.CustomerName;



-- SELF JOIN  (Create two variations of same table and join them)
-- WAQ to find the customers belonging to the same city.
-- SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
-- FROM Customers A, Customers B
-- WHERE A.CustomerID != B.CustomerID
-- AND A.City = B.City
--ORDER BY A.City;

