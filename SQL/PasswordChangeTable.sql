CREATE TABLE `Team20Schema`.`PasswordChanges` (
  `Password_Change_ID` INT NOT NULL AUTO_INCREMENT,
  `Change_TIme` DATETIME NULL,
  `Change_Type` VARCHAR(45) NULL,
  `User_ID` INT NULL,
  PRIMARY KEY (`Password_Change_ID`),
  INDEX `fk_password_user_id_idx` (`User_ID` ASC) VISIBLE,
  CONSTRAINT `fk_password_user_id`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
