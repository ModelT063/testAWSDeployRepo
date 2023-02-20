CREATE TABLE `Team20Schema`.`Users` (
  `User_ID` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `UserType` INT NOT NULL,
  `F_Name` VARCHAR(45) NULL,
  `L_Name` VARCHAR(45) NULL,
  `Sponsor_Org_ID` INT NULL,
  `Application_ID` INT NULL,
  `Catalog_ID` INT NULL,
  `Points` INT NULL,
  PRIMARY KEY (`User_ID`));

