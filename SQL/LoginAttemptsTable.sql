CREATE TABLE `Team20Schema`.`LoginAttempts` (
  `Login_ID` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NULL,
  `Login_Status` INT NULL,
  `Login_Time` DATETIME NULL,
  `User_ID` INT NULL,
  PRIMARY KEY (`Login_ID`),
  INDEX `fk_login_attempts_user_id_idx` (`User_ID` ASC) VISIBLE,
  CONSTRAINT `fk_login_attempts_user_id`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);