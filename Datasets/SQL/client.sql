CREATE TABLE CLIENT(
   ClientID          VARCHAR(10) NOT NULL PRIMARY KEY,
   CurrentInvoiceID  VARCHAR(13) NOT NULL FOREIGN KEY REFERENCES Invoice(InvoiceID),
   HandlerEmployeeID INTEGER  NOT NULL FOREIGN KEY REFERENCES Employee(EmployeeID),
   Name              VARCHAR(17) NOT NULL,
   Phone             INTEGER  NOT NULL,
   CountryCode       VARCHAR(2) NOT NULL,
   ContactEmail      VARCHAR(18) NOT NULL
);

INSERT INTO CLIENT(ClientID,CurrentInvoiceID,HandlerEmployeeID,Name,Phone,CountryCode,ContactEmail) VALUES ('1','NV/17T0131788',1101,'Evolve Corp.',8362347631,'NY','sales@evolve.com');
INSERT INTO CLIENT(ClientID,CurrentInvoiceID,HandlerEmployeeID,Name,Phone,CountryCode,ContactEmail) VALUES ('2','NV/17T0132066',1102,'Magnificent Inc.',8867640912,'IN','sales@mag.com');
INSERT INTO CLIENT(ClientID,CurrentInvoiceID,HandlerEmployeeID,Name,Phone,CountryCode,ContactEmail) VALUES ('3','NV/17T0132197',1107,'Beautiful Org.',8451948107,'TN','sales@beautful.org');
INSERT INTO CLIENT(ClientID,CurrentInvoiceID,HandlerEmployeeID,Name,Phone,CountryCode,ContactEmail) VALUES ('4','NV/17T0132746',1104,'Stellar & Stellar',8453092187,'TX','sales@stellar.com');
INSERT INTO CLIENT(ClientID,CurrentInvoiceID,HandlerEmployeeID,Name,Phone,CountryCode,ContactEmail) VALUES ('5','NV/17T0132113',1103,'Fabulous Co.',8127403805,'CA','sales@fab.com');
