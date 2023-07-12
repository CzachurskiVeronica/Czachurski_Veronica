CREATE TABLE ESTUDIANTE
(
  nombre VARCHAR(25) NOT NULL,
  dni INT NOT NULL,
  fecha_nac DATE NOT NULL,
  email VARCHAR(25) NOT NULL,
  cod_matricula INT NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL,
  nombre VARCHAR(25) NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL,
  nombre VARCHAR(25) NOT NULL,
  especialidad VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE inscripto
(
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ESTUDIANTE(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

CREATE TABLE dicta
(
  profesor_id INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (profesor_id, cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);
