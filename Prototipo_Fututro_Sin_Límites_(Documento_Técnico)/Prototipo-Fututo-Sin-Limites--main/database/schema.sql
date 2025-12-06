-- Tabla de usuarios
CREATE TABLE usuarios (
    id_usuario       SERIAL PRIMARY KEY,
    nombre           VARCHAR(100)        NOT NULL,
    correo           VARCHAR(150)        NOT NULL UNIQUE,
    contrasena       VARCHAR(255)        NOT NULL,
    rol              VARCHAR(50)         NOT NULL,
    comunidad        VARCHAR(100),
    grado_escolar    VARCHAR(50),
    fecha_registro   TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de áreas profesionales
CREATE TABLE areas_profesionales (
    id_area       SERIAL PRIMARY KEY,
    nombre_area   VARCHAR(100)   NOT NULL,
    descripcion   TEXT,
    icono         VARCHAR(100)
);

-- Tabla de recursos
CREATE TABLE recursos (
    id_recurso   SERIAL PRIMARY KEY,
    titulo       VARCHAR(150)   NOT NULL,
    descripcion  TEXT,
    tipo         VARCHAR(50),
    url_recurso  TEXT,
    nivel        VARCHAR(20),
    id_area      INTEGER       NOT NULL,
    es_juego     BOOLEAN       NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_recursos_area
        FOREIGN KEY (id_area)
        REFERENCES areas_profesionales (id_area)
);

-- Tabla de universidades
CREATE TABLE universidades (
    id_universidad  SERIAL PRIMARY KEY,
    nombre          VARCHAR(150)   NOT NULL,
    departamento    VARCHAR(100),
    sitio_web       TEXT,
    contacto        VARCHAR(100)
);

-- Tabla de ofertas formativas
CREATE TABLE ofertas_formativas (
    id_oferta        SERIAL PRIMARY KEY,
    id_universidad   INTEGER      NOT NULL,
    id_area          INTEGER      NOT NULL,
    nombre_programa  VARCHAR(150) NOT NULL,
    tipo             VARCHAR(50),
    duracion         VARCHAR(50),
    CONSTRAINT fk_oferta_universidad
        FOREIGN KEY (id_universidad)
        REFERENCES universidades (id_universidad),
    CONSTRAINT fk_oferta_area
        FOREIGN KEY (id_area)
        REFERENCES areas_profesionales (id_area)
);

-- Tabla de progreso de usuario
CREATE TABLE progreso_usuario (
    id_progreso            SERIAL PRIMARY KEY,
    id_usuario             INTEGER      NOT NULL,
    id_recurso             INTEGER      NOT NULL,
    estado                 VARCHAR(20),
    puntuacion             INTEGER,
    fecha_ultima_actividad TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_progreso_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios (id_usuario),
    CONSTRAINT fk_progreso_recurso
        FOREIGN KEY (id_recurso)
        REFERENCES recursos (id_recurso)
);
