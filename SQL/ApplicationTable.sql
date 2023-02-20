CREATE TABLE `Team20Schema`.`Applications` (
  `Application_ID` INT NOT NULL,
  `Time_Submitted` DATETIME NULL,
  `Application_Status` INT NULL,
  `Application_Document` BLOB NULL,
  PRIMARY KEY (`Application_ID`));
