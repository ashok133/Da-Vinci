CREATE TABLE INVOICE(
   InvoiceID              VARCHAR(13) NOT NULL PRIMARY KEY,
   RegulationID           VARCHAR(4) NOT NULL,
   ContractID             VARCHAR(10) NOT NULL,
   EmployeeID             INTEGER  NOT NULL,
   ClientID               INTEGER  NOT NULL,
   DateAdded              DATE  NOT NULL,
   Stage                  VARCHAR(14) NOT NULL,
   AmountDue              INTEGER  NOT NULL,
   BillToContactName      VARCHAR(17) NOT NULL,
   BillToAddress          VARCHAR(2) NOT NULL,
   BillToPhone            INTEGER  NOT NULL,
   BillToEmail            VARCHAR(17) NOT NULL,
   BilledProductID        VARCHAR(8) NOT NULL,
   BilledProductDesc      VARCHAR(7) NOT NULL,
   BilledProductCost      INTEGER  NOT NULL,
   BilledProductQuantity  INTEGER  NOT NULL,
   BilledProductLineTotal INTEGER  NOT NULL,
   ConcessionBool         INTEGER  NOT NULL,
   ConcessionValue        INTEGER  NOT NULL,
   Total                  INTEGER  NOT NULL,
   AmountDue2              INTEGER  NOT NULL, -- need to clean this column up from data, duplicate column name. ERROR 1060 (42S21): Duplicate column name 'AmountDue'. Renamed for now to get data in
   AmountPaid             INTEGER,
   PaymentDueDate         DATE  NOT NULL,
   Notes                  VARCHAR(100)
);

INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,AmountDue,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue2,AmountPaid,PaymentDueDate,Notes) VALUES ('NV/17T0131788','R-14','PS-1100896',1101,1,'04/08/19','sent',1944000,'Evolve Corp.','NY',8362347631,'sales@evolve.com','9260LWFA','HANA P4',7345234,1,7345234,0,0,7345234,7345234,NULL,'05/08/19','requested early payment');
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,AmountDue,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue2,AmountPaid,PaymentDueDate,Notes) VALUES ('NV/17T0132066','R-15','PS-1101418',1102,2,'04/08/19','sent',1944000,'Magnificent Inc.','IN',8867640912,'sales@mag.com','9260LWFB','HANA P5',125321,1,125321,1,45000,80321,80321,NULL,'05/08/19','requested early payment');
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,AmountDue,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue2,AmountPaid,PaymentDueDate,Notes) VALUES ('NV/17T0132113','R-17','PS-1101465',1103,5,'04/11/19','partially_paid',648000,'Fabulous Co.','CA',8127403805,'sales@fab.com','9260LWFC','HANA P6',123121,1,123121,1,30000,93121,90121,3000,'05/11/19',NULL);
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,AmountDue,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue2,AmountPaid,PaymentDueDate,Notes) VALUES ('NV/17T0132746','R-24','PS-1102292',1104,4,'04/28/19','partially_paid',648000,'Stellar & Stellar','TX',8453092187,'sales@stellar.com','9260LWFD','HANA P7',187168,1,187168,0,0,187168,147168,40000,'05/28/19',NULL);
