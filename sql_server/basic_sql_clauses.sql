-- DISTINCT()
-- WAQ to list all the countries in Customers table only once
--SELECT DISTINCT Country
--FROM Customers;

-- WAQ to count the countries to which customers belong.
--SELECT COUNT(DISTINCT(Country)) AS CountryCount
--FROM Customers;

-- IN DINSTINCT we can also use multiple columns and the column with largest unique count will decide the number or results
--SELECT DISTINCT Country, City
--FROM Customers;



-- ORDER BY
-- WAQ list all the customers and sort them based on their ContactName in alphabetical order
--SELECT *
--FROM Customers
--ORDER BY ContactName;


-- WHERE BETWEEN
-- WAQ to find the products with prices between 100 and 150
--SELECT *
--FROM Products
--WHERE Price BETWEEN 100 AND 150;

-- LIKE
-- WAQ to find all the possible Italian customers with names ending in o
--SELECT *
--FROM Customers
--WHERE CustomerName LIKE '%o';


-- IN 
-- WAQ to find customers belonging to 'Germany' or 'France' or 'Usa'
--SELECT *
--FROM Customers
--WHERE Country='Germany' OR Country='France' or Country='Usa';

-- Better is to use IN operator here
-- SELECT *
-- FROM Customers
-- WHERE Country IN('Germany', 'France', 'Usa');

-- ALTER TABLE
-- It's used to change the schema of the table not the stored values
-- For example add a new column called DOB to test Table
--ALTER TABLE test
--ADD DOB DATE;


-- UPDATE Table 
-- It's used to update the data in the tables
--UPDATE Customers
--SET Country='India'
--WHERE CustomerID=1;


-- NULL check is straight forward, with WHERE and IS
-- waq to find all customers with country null
-- SELECT *
-- FROM Customers
-- WHERE Country IS NULL;

-- waq to find all customers where country is not null
-- SELECT *
-- FROM Customers
-- WHERE Country IS NOT NULL;















