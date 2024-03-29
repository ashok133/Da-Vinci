CREATE TABLE INVOICE(
  InvoiceID              VARCHAR(13) NOT NULL PRIMARY KEY,
  RegulationID           VARCHAR(4) NOT NULL,
  ContractID             VARCHAR(10) NOT NULL,
  EmployeeID             INTEGER  NOT NULL,
  ClientID               INTEGER  NOT NULL,
  DateAdded              DATE  NOT NULL,
  Stage                  VARCHAR(14) NOT NULL,
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
  AmountDue              INTEGER  NOT NULL,
  AmountPaid             INTEGER,
  PaymentDueDate         DATE  NOT NULL,
  PaymentTerm            VARCHAR(100),
  Notes                  VARCHAR(100)
);

INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue,AmountPaid,PaymentDueDate,PaymentTerm,Notes) VALUES ('NV/17T0131788','R-14','PS-1100896',1101,1,'04/08/19','sent','Evolve Corp.','NY',8362347631,"sales@evolve.com",'9260LWFA','HANA P4',7345234,1,7345234,0,0,7345234,7300000,45234,'05/08/19','EOM','requested early payment');
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue,AmountPaid,PaymentDueDate,PaymentTerm,Notes) VALUES ('NV/17T0132066','R-15','PS-1101418',1102,2,'04/08/19','sent','Magnificent Inc.','CA',8867640912,'sales@mag.com','9260LWFB','HANA P5',125321,1,125321,1,45000,80321,20000,60321,'05/08/19','Net 15','requested early payment');
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue,AmountPaid,PaymentDueDate,PaymentTerm,Notes) VALUES ('NV/17T0132113','R-17','PS-1101465',1103,5,'04/11/19','partially_paid','Fabulous Co.','CA',8127403805,'sales@fab.com','9260LWFC','HANA P6',123121,1,123121,1,30000,93121,90121,3000,'05/11/19','Net 30','none');
INSERT INTO INVOICE(InvoiceID,RegulationID,ContractID,EmployeeID,ClientID,DateAdded,Stage,BillToContactName,BillToAddress,BillToPhone,BillToEmail,BilledProductID,BilledProductDesc,BilledProductCost,BilledProductQuantity,BilledProductLineTotal,ConcessionBool,ConcessionValue,Total,AmountDue,AmountPaid,PaymentDueDate,PaymentTerm,Notes) VALUES ('NV/17T0132746','R-24','PS-1102292',1104,4,'04/28/19','partially_paid','Stellar & Stellar','TX',8453092187,'sales@stellar.com','9260LWFD','HANA P7',187168,1,187168,0,0,187168,147168,40000,'05/28/19','EOM','none');