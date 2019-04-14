CREATE TABLE REGULATION(
   RegulationID          VARCHAR(10) NOT NULL PRIMARY KEY,
   RegulationCountryCode VARCHAR(4) NOT NULL,
   RegulationTerms       VARCHAR(46) NOT NULL
);

INSERT INTO REGULATION(RegulationID,RegulationCountryCode,RegulationTerms) VALUES ('R-14','EU','https://europa.eu/european-union/law_en');
INSERT INTO REGULATION(RegulationID,RegulationCountryCode,RegulationTerms) VALUES ('R-15','EU','https://europa.eu/european-union/law_en');
INSERT INTO REGULATION(RegulationID,RegulationCountryCode,RegulationTerms) VALUES ('R-17','US','http://uscode.house.gov/');
INSERT INTO REGULATION(RegulationID,RegulationCountryCode,RegulationTerms) VALUES ('R-24','IN','http://doj.gov.in/acts-and-rules');
INSERT INTO REGULATION(RegulationID,RegulationCountryCode,RegulationTerms) VALUES ('R-28','CH','http://english.gov.cn/archive/lawsregulations/');
