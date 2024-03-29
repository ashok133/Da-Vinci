CREATE TABLE CONTRACT(
   ContractID      VARCHAR(10) NOT NULL PRIMARY KEY,
   CompanyID       VARCHAR(10) NOT NULL,
   DateSigned      DATE  NOT NULL,
   TerminationDate DATE  NOT NULL,
   FOREIGN KEY(CompanyID) REFERENCES CLIENT(ClientID)
);

INSERT INTO CONTRACT(ContractID,CompanyID,DateSigned,TerminationDate) VALUES ('PS-1100896',1,'04/08/19','04/08/20');
INSERT INTO CONTRACT(ContractID,CompanyID,DateSigned,TerminationDate) VALUES ('PS-1101418',2,'04/08/19','04/08/20');
INSERT INTO CONTRACT(ContractID,CompanyID,DateSigned,TerminationDate) VALUES ('PS-1101465',5,'04/11/19','04/11/20');
INSERT INTO CONTRACT(ContractID,CompanyID,DateSigned,TerminationDate) VALUES ('PS-1102292',4,'04/28/19','04/28/20');
