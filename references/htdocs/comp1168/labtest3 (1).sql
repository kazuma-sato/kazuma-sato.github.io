/* COMP1168 CRN 46322
 * Lab Test 3 (a)
 * Instructor Abid Rana
 * Kazuma Sato 100 948 212
 * Friday, March 27, 2015
 */

-- 1.
SELECT customername, customercity, customerstate FROM Customer_T 
WHERE customercity LIKE 'S%';

-- 2.
SELECT customercity, customerstate, customername FROM Customer_t
ORDER BY customercity ASC;

- 3.
SELECT salespersonname AS salespersons_without_fax 
FROM SalesPerson_T 
WHERE salespersonfax IS NULL;

-- 4.
SELECT productdescription, productfinish, productstandardprice 
FROM Product_T
WHERE productdescription LIKE '%Table%' 
OR productstandardprice > 700;
