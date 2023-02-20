CREATE TABLE `Team20Schema`.`Orders` (
  `Order_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NULL,
  `Points_ID` INT NULL,
  `Order_Status` INT NULL,
  `Product` VARCHAR(45) NULL,
  `Order_Time` DATETIME NULL,
  PRIMARY KEY (`Order_ID`),
  INDEX `fk_order_user_id_idx` (`User_ID` ASC) VISIBLE,
  CONSTRAINT `fk_order_user_id`
    FOREIGN KEY (`User_ID`)
    REFERENCES `Team20Schema`.`Users` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);