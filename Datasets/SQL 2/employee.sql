CREATE TABLE EMPLOYEE(
   EmployeeID      VARCHAR(4) NOT NULL PRIMARY KEY,
   FirstName       VARCHAR(7) NOT NULL,
   LastName        VARCHAR(9) NOT NULL,
   Department      VARCHAR(3) NOT NULL,
   ExpPoints       INTEGER  NOT NULL,
   Level           INTEGER  NOT NULL,
   TurnedInvoices  INTEGER  NOT NULL,
   PendingInvoices INTEGER  NOT NULL
);

INSERT INTO EMPLOYEE(EmployeeID,FirstName,LastName,Department,ExpPoints,Level,TurnedInvoices,PendingInvoices) VALUES ('1101','Ashok','Patel','C2R',40000,3,4,2);
INSERT INTO EMPLOYEE(EmployeeID,FirstName,LastName,Department,ExpPoints,Level,TurnedInvoices,PendingInvoices) VALUES ('1102','Daniel','Kilcullen','C2R',20000,2,2,3);
INSERT INTO EMPLOYEE(EmployeeID,FirstName,LastName,Department,ExpPoints,Level,TurnedInvoices,PendingInvoices) VALUES ('1103','Daryl','Soo','C2R',40000,3,4,1);
INSERT INTO EMPLOYEE(EmployeeID,FirstName,LastName,Department,ExpPoints,Level,TurnedInvoices,PendingInvoices) VALUES ('1104','Kevin','Schmidt','C2R',30000,2,3,2);
INSERT INTO EMPLOYEE(EmployeeID,FirstName,LastName,Department,ExpPoints,Level,TurnedInvoices,PendingInvoices) VALUES ('1105','Michael','Frutiger','C2R',50000,4,5,1);