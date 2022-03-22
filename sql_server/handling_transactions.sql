/*

A transaction is set of operations in which all operations are supposed to execute 
in the given order.

If any operation fails within a transaction then we have to ROLLOVER back to the 
old state and undo everything done previously

If all the operation are successfu within a transaction then we can finally COMMIT
the reusult in the Database.
*/


USE w3_db;  
GO  
CREATE TABLE Test (value INT NOT NULL);  
GO  
  
DECLARE @TransactionName VARCHAR(20) = 'Transaction1';  
  

BEGIN TRANSACTION @TransactionName  
       INSERT INTO Test VALUES(1), (2);  
--ROLLBACK TRAN @TransactionName;  
  
INSERT INTO Test VALUES(3),(4);  
  
SELECT [value] FROM Test;  
COMMIT TRANSACTION;

DROP TABLE Test;  