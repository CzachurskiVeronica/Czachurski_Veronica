CREATE TABLE PAIS
(
  nombre_pais CHAR(25) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (pais_id)
);

CREATE TABLE PROVINCIA
(
  nombre_provincia CHAR(25) NOT NULL,
  provincia_id INT NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT NOT NULL,
  nombre CHAR(25) NOT NULL,
  codigo_postal VARCHAR(10) NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  nombre CHAR(25) NOT NULL,
  telefono VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  _fecha_alta DATE NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad)
);