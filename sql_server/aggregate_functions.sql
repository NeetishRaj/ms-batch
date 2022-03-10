

-- AS 
--SELECT *
--FROM Customers AS c, Orders AS o
--WHERE c.CustomerID=o.CustomerID;


--COUNT()
--SELECT COUNT(*)
--FROM Customers;


-- MAX()
-- WAQ to find the max priced product
--SELECT MAX(Price) AS MaxPrice
--FROM Products;

-- MIN()
-- WAQ to find the min priced product
--SELECT MIN(Price) AS MinPrice
--FROM Products;

-- PI
-- Create a variable MathPI using PI()
--SELECT PI() AS MathPI;


--ROUND(value, decimal_counts)
-- Round up PI upto 2 decimal places
--SELECT ROUND(3.1789, 3) AS RoundedUpto3Decimal

--SUM();
-- WAQ to find the sum of all prices in the Products table
--SELECT SUM(Price) AS PricesSum
--FROM Products;


--CURRENT_TIMESTAMP
--SELECT CURRENT_TIMESTAMP;


-- DATEDIFF
-- WAQ to find the difference between two dates in years
--SELECT DATEDIFF(YEAR, '2017/08/25', '2011/08/25') AS DateDiff;
-- WAQ to find the difference between two dates in Day
--SELECT DATEDIFF(DAY, '2017/08/25', '2011/08/25') AS DateDiff;


-- String functions

-- LOWER
-- WAQ to convert a string to Lower case
--SELECT LOWER('ABCDEabcde xyzXYZ') AS smallcaps;

-- WAQ to convert a string to Upper case
--SELECT UPPER('ABCDEabcde xyzXYZ') AS uppercaps;


--DATALENGTH
--WAQ to get the string length
--SELECT DATALENGTH('a quick brown fox jumped ober the lazy dog');

--LEFT(string_value, character_count_from_left)
-- WAQ to extract 5 characters from the left of the string
--SELECT LEFT('abcdefghi', 5);

--SUBSTRING(string_value, startIndex, endIndex)
-- WAQ  to extract 'love' from 'i love to code'
SELECT SUBSTRING('i love to code', 2, 5);

