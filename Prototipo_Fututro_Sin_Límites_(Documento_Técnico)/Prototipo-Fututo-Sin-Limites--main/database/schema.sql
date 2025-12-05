-- Tabla de Usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL DEFAULT 'estudiante',
    comunidad VARCHAR(255),
    grado_escolar VARCHAR(50),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Áreas Profesionales
CREATE TABLE areas_profesionales (
    id_area SERIAL PRIMARY KEY,
    nombre_area VARCHAR(255) NOT NULL UNIQUE,
    descripcion TEXT,
    icono VARCHAR(255)
);

-- Tabla de Recursos (Videos, Artículos, Juegos)
CREATE TABLE recursos (
    id_recurso SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    tipo VARCHAR(50) NOT NULL,
    url_recurso VARCHAR(500),
    nivel VARCHAR(50) NOT NULL,
    id_area INTEGER NOT NULL,
    es_juego BOOLEAN DEFAULT FALSE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_area) REFERENCES areas_profesionales(id_area) ON DELETE CASCADE
);

-- Tabla de Universidades
CREATE TABLE universidades (
    id_universidad SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    departamento VARCHAR(255),
    sitio_web VARCHAR(500),
    contacto VARCHAR(255)
);

-- Tabla de Ofertas Formativas
CREATE TABLE ofertas_formativas (
    id_oferta SERIAL PRIMARY KEY,
    id_universidad INTEGER NOT NULL,
    id_area INTEGER NOT NULL,
    nombre_programa VARCHAR(255) NOT NULL,
    tipo VARCHAR(100),
    duracion VARCHAR(50),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_universidad) REFERENCES universidades(id_universidad) ON DELETE CASCADE,
    FOREIGN KEY (id_area) REFERENCES areas_profesionales(id_area) ON DELETE CASCADE
);

-- Tabla de Progreso de Usuario
CREATE TABLE progreso_usuario (
    id_progreso SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    id_recurso INTEGER NOT NULL,
    estado VARCHAR(50) NOT NULL DEFAULT 'iniciado',
    puntuacion INTEGER DEFAULT 0,
    fecha_ultima_actividad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_recurso) REFERENCES recursos(id_recurso) ON DELETE CASCADE
);

-- Índices para optimizar búsquedas
CREATE INDEX idx_usuarios_correo ON usuarios(correo);
CREATE INDEX idx_recursos_area ON recursos(id_area);
CREATE INDEX idx_recursos_nivel ON recursos(nivel);
CREATE INDEX idx_recursos_tipo ON recursos(tipo);
CREATE INDEX idx_progreso_usuario ON progreso_usuario(id_usuario);
CREATE INDEX idx_progreso_recurso ON progreso_usuario(id_recurso);
CREATE INDEX idx_ofertas_universidad ON ofertas_formativas(id_universidad);
CREATE INDEX idx_ofertas_area ON ofertas_formativas(id_area);

-- Datos iniciales: Áreas Profesionales
INSERT INTO areas_profesionales (nombre_area, descripcion, icono) VALUES
('Programación', 'Introducción al desarrollo de software y lógica computacional.', '/icons/code.svg'),
('Diseño Gráfico', 'Creatividad visual y comunicación gráfica.', '/icons/design.svg'),
('Arquitectura', 'Diseño de espacios y estructuras innovadoras.', '/icons/architecture.svg');

-- Datos iniciales: Universidades
INSERT INTO universidades (nombre, departamento, sitio_web, contacto) VALUES
('Universidad da Vinci de Guatemala', 'Ciudad de Guatemala', 'https://davinci.edu.gt', 'info@davinci.edu.gt'),
('Universidad de San Carlos', 'Ciudad de Guatemala', 'https://usac.edu.gt', 'admisiones@usac.edu.gt'),
('Universidad Galileo', 'Ciudad de Guatemala', 'https://galileo.edu', 'info@galileo.edu'),
('Universidad Mariano Gálvez', 'Ciudad de Guatemala', 'https://umg.edu.gt', 'admisiones@umg.edu.gt'),
('Universidad Rafael Landívar', 'Ciudad de Guatemala', 'https://url.edu.gt', 'admisiones@url.edu.gt'),
('Universidad del Valle', 'Altiplano Occidental', 'https://univalle.edu.gt', 'info@univalle.edu.gt');
