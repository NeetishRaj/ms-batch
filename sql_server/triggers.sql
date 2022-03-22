/* 
TRIGGERs are basically some SQL statements that gets triggered 
when any designated sql commmand is executed on any table
*/


--CREATE TRIGGER reminder1  
--ON Test
--AFTER INSERT, UPDATE   
--AS RAISERROR ('new value added please check old values', 16, 10);  
--GO  

-- Now lets do an insert to test out trigger reminder1

INSERT INTO Test VALUES (10), (20);