-- CASE-WHEN
-- WAQ to create a separate column 'QuotaFulfilled' where we categorize OrderDetails in two cases
-- WHEN Quantity > 30 , then 'True'
-- ELSE, then 'False'

SELECT OrderID, Quantity,
CASE
	WHEN Quantity > 30 THEN 'TRUE'
	WHEN Quantity = 30 THEN 'TRUE'
	ELSE 'FALSE'
END AS QuotaFulfilled


FROM OrderDetails;
