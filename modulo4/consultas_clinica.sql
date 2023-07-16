-- Crear las sentencias SQL para realizar las siguientes acciones y almacenarlo en un archivo llamado “consultas_clinca.sql”.

-- A) INSERT INTO paciente (nss, nombre, apellido, domicilio, codigo_postal, telefono, nro_historial_clinico, observaciones) VALUES (22558, 'Antonio', 'Magallanes', 'Dos Pindo 260', 3640, null, 1932, null);

-- B) UPDATE clinica.paciente SET telefono = '3745-589174' WHERE (nro_historial_clinico = 1932);

-- C) SELECT CONCAT(apellido, ', ', nombre) AS PACIENTE, observaciones AS OBSERVACION_REGISTRADA FROM clinica.paciente WHERE observaciones IS NOT NULL AND observaciones <> '' ORDER BY paciente;

-- D) SELECT CONCAT(paciente.apellido, ', ', paciente.nombre) AS paciente, medico.especialidad AS especialidad_requerida FROM paciente INNER JOIN ingreso ON paciente.nro_historial_clinico = ingreso.paciente_nro_historial_clinico INNER JOIN medico ON ingreso.medico_matricula = medico.matricula ORDER BY paciente.apellido ASC;

-- E) DELETE FROM medico WHERE medico.matricula NOT IN (SELECT medico_matricula FROM ingreso);

-- F) SELECT nro_cama, COUNT(*) AS USOS FROM ingresoGROUP BY nro_cama ORDER BY USOS DESC;

-- G) SELECT paciente.apellido, paciente.nombre, COUNT(*) AS cantidad_ingresos FROM paciente INNER JOIN ingreso ON paciente.nro_historial_clinico = ingreso.paciente_nro_historial_clinico GROUP BY paciente.nro_historial_clinico HAVING COUNT(*) >= 4 ORDER BY cantidad_ingresos DESC; 
