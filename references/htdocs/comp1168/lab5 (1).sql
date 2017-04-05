drop table Owner_property;
drop table Property;
drop table Employee;
drop table Office;
drop table Owner;


create table Office
      (
       OfficeID  number(3,0)  not null,
       StreetNo number(5,0) not null,
       StreetName varchar2(20) not null,
       City varchar2(20) not null,
       Province char(2) not null,
       PostalCode varchar2(6) not null,
       PhoneNumber number(10),
      
       constraint Office_PK PRIMARY KEY (OfficeID)
      );
       
create table Employee
      (
        EmployeeID number(11,0) not null,
        FirstName varchar2(20) not null,
        LastName varchar2(20) not null,
        PhoneNumber number(10),
        JobTitle varchar(20),
        OfficeID  number(3,0)  not null,
        
        constraint Employee_PK primary key (EmployeeID),
        constraint Employee_FK foreign key (OfficeID) references Office(OfficeID)
        );      
        


create table Property
      (
        PropertyID numeric(5,0)  not null,
        StreetNo numeric(5,0) not null,
        StreetName varchar2(20) not null,
        City varchar2(20) not null,
        Province char(2) not null,
        PostalCode varchar2(6) not null,
        Price numeric(10,2),
        OfficeID  number(3,0),
        
        constraint Property_PK primary key (PropertyID),
        constraint Property_FK foreign key (OfficeID) references Office(OfficeID)
      );

create table Owner
      (
        OwnerID numeric(11,0) not null,
        FirstName varchar2(20) not null,
        LastName varchar2(20) not null,
        PhoneNumber numeric(10),
        
        constraint Owner_PK primary key (OwnerID)
      );
      
create table Owner_Property
      (
        PropertyID numeric(5,0)  not null,
        OwnerID numeric(11,0) not null,
        
        constraint Owner_Property_PK primary key (PropertyID, OwnerID),
        constraint Owner_Property_FK1 foreign key (OwnerID) references Owner (OwnerID),
        constraint Owner_Property_FK2 foreign key (PropertyID) references Property (PropertyID)
      );

INSERT ALL 
    INTO OFFICE
      (OFFICEID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, PHONENUMBER)
      VALUES
      (001, 10, 'Somewhere Street', 'Toronto', 'ON', 'M6G3R3', 4161231234)
    INTO OFFICE
      (OFFICEID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, PHONENUMBER)
      VALUES
      (002, 20, 'Elsewhere Avenue', 'Ottawa', 'ON', 'A1G213', 9043124321)
    INTO OFFICE
      (OFFICEID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, PHONENUMBER)
      VALUES
      (003, 10, 'Nowhere Drive', 'Montreal', 'QU', 'Q9U2U2', 4161231234)
    INTO EMPLOYEE
      (EMPLOYEEID, FIRSTNAME, LASTNAME, PHONENUMBER, JOBTITLE, OFFICEID)
      VALUES 
      (00000000001, 'John', 'Doe', 4161234567, 'CEO', 001)
    INTO EMPLOYEE
      (EMPLOYEEID, FIRSTNAME, LASTNAME, PHONENUMBER, JOBTITLE, OFFICEID)
      VALUES 
      (00000000002, 'Jane', 'Doe', 4161234567, 'Branch Manager', 003)
    INTO EMPLOYEE
      (EMPLOYEEID, FIRSTNAME, LASTNAME, PHONENUMBER, JOBTITLE, OFFICEID)
      VALUES 
      (00000000003, 'Some', 'Guy', 9087654321, 'Accountant', 002)
    INTO PROPERTY 
      (PROPERTYID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, PRICE, OFFICEID)
      VALUES
      (00001, 12345, 'New House', 'Toronto', 'ON', 'M6G3W1', 10000000, 003)
    INTO PROPERTY 
      (PROPERTYID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, OFFICEID)
      VALUES
      (999, 1000, 'Yonge Street', 'Toronto', 'ON', 'M6G1D2', 001)
    INTO PROPERTY 
      (PROPERTYID, STREETNO, STREETNAME, CITY, PROVINCE, POSTALCODE, PRICE, OFFICEID)
      VALUES
      (1773, 435, 'Some Street', 'Ottawa', 'ON', 'A4W1R1', 2000000, 001)
    INTO OWNER
      (OWNERID, FIRSTNAME, LASTNAME, PHONENUMBER)
      VALUES
      (00001, 'First', 'Customer', 5555555555)
    INTO OWNER
      (OWNERID, FIRSTNAME, LASTNAME, PHONENUMBER)
      VALUES
      (99999, 'Last', 'Client', 9999999999)
    INTO OWNER
      (OWNERID, FIRSTNAME, LASTNAME, PHONENUMBER)
      VALUES
      (12341, 'Random', 'Person', 8710748123)
    INTO OWNER_PROPERTY
      (PROPERTYID, OWNERID)
      VALUES
      (00001, 00001)
    INTO OWNER_PROPERTY
      (PROPERTYID, OWNERID)
      VALUES
      (999, 99999)
    INTO OWNER_PROPERTY
      (PROPERTYID, OWNERID)
      VALUES
      (1773, 12341)
     SELECT * FROM DUAL;

DELETE Owner_property;
DELETE Property;
DELETE Employee;
DELETE Office;
DELETE Owner;