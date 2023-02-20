CREATE TABLE `Team20Schema`.`SponsorDriverRelationship` (
  `SD_Relationship_ID` INT NOT NULL AUTO_INCREMENT,
  `Relationship_Statis` INT NOT NULL,
  `Application_ID` INT NULL,
  `User_ID` INT NULL,
  `UserType` INT NOT NULL,
  `Sponsor_Org_ID` INT NULL,
  PRIMARY KEY (`SD_Relationship_ID`),
  INDEX `fk_user_id_relationship_idx` (`User_ID` ASC) VISIBLE,
  INDEX `fk_org_id_relationship_idx` (`Sponsor_Org_ID` ASC) VISIBLE,
  CONSTRAINT `fk_user_id_relationship`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_org_id_relationship`
    FOREIGN KEY (`Sponsor_Org_ID`)
    REFERENCES `Team20Schema`.`SponsorOrganizations` (`Sponsor_Org_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);