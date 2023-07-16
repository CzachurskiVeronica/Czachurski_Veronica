-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clinica
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clinica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clinica` DEFAULT CHARACTER SET utf8mb4 ;
USE `clinica` ;

-- -----------------------------------------------------
-- Table `clinica`.`medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`medico` (
  `matricula` INT(11) NOT NULL,
  `nombre` VARCHAR(30) NULL DEFAULT NULL,
  `apellido` VARCHAR(30) NULL DEFAULT NULL,
  `especialidad` VARCHAR(20) NULL DEFAULT NULL,
  `observaciones` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`matricula`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `clinica`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`paciente` (
  `nss` BIGINT(20) NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `domicilio` VARCHAR(50) NULL DEFAULT NULL,
  `codigo_postal` SMALLINT(6) NULL DEFAULT NULL,
  `telefono` VARCHAR(16) NULL DEFAULT NULL,
  `nro_historial_clinico` INT(11) NOT NULL,
  `observaciones` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`nro_historial_clinico`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `clinica`.`ingreso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`ingreso` (
  `id_ingreso` INT(11) NOT NULL,
  `fecha_ingreso` DATE NOT NULL,
  `nro_habitacion` SMALLINT(6) NULL DEFAULT NULL,
  `nro_cama` SMALLINT(6) NULL DEFAULT NULL,
  `observaciones` TEXT NULL DEFAULT NULL,
  `nro_historial_paciente` INT(11) NULL DEFAULT NULL,
  `matricula_medico` INT(11) NULL DEFAULT NULL,
  `medico_matricula` INT(11) NOT NULL,
  `paciente_nro_historial_clinico` INT(11) NOT NULL,
  PRIMARY KEY (`id_ingreso`),
  INDEX `fk_ingreso_medico_idx` (`medico_matricula` ASC) VISIBLE,
  INDEX `fk_ingreso_paciente1_idx` (`paciente_nro_historial_clinico` ASC) VISIBLE,
  CONSTRAINT `fk_ingreso_medico`
    FOREIGN KEY (`medico_matricula`)
    REFERENCES `clinica`.`medico` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingreso_paciente1`
    FOREIGN KEY (`paciente_nro_historial_clinico`)
    REFERENCES `clinica`.`paciente` (`nro_historial_clinico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
