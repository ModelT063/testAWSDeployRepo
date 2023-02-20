CREATE TABLE `Team20Schema`.`Points` (
  `Points_ID` INT NOT NULL AUTO_INCREMENT,
  `Point_Change` INT NULL,
  `Change_Reason` VARCHAR(45) NULL,
  `Change_Time` DATETIME NULL,
  `User_ID` INT NULL,
  PRIMARY KEY (`Points_ID`),
  INDEX `fk_points_user_id_idx` (`User_ID` ASC) VISIBLE,
  CONSTRAINT `fk_points_user_id`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);