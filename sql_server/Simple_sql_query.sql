/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP(1000)
		[ID],
      [Name],
      [Age]
  FROM [employees_db].[dbo].[Employee]
 WHERE Age > 30 OR Age < 25;
