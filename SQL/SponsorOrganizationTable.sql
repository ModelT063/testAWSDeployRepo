CREATE TABLE `Team20Schema`.`SponsorOrganizations` (
  `Sponsor_Org_ID` INT NOT NULL AUTO_INCREMENT,
  `Organization_Name` VARCHAR(45) NULL,
  `Points_Ratio` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `User_ID` INT NULL,
  PRIMARY KEY (`Sponsor_Org_ID`),
  INDEX `fk_user_id_sponsor_org_idx` (`User_ID` ASC) VISIBLE,
  CONSTRAINT `fk_user_id_sponsor_org`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);