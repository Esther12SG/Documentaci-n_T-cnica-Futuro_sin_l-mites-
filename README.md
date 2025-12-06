Documento Técnico

FUTURO SIN LÍMITES

Plataforma Web de Orientación Vocacional Tecnológica para Comunidades Rurales e Instituciones Educativas

DEFINICIÓN DEL PROBLEMA Y SOLUCIÓN







   
1. Problema:


En Guatemala, especialmente en aldeas y comunidades rurales, los estudiantes carecen de acceso a información, formación básica y orientación vocacional sobre las profesiones más Predomeninantes hoy en dia en la sociedad como por ejemplo:

Tecnología, Programación, Diseño Gráfico, Arquitectura, entre otras.

A partir de experiencias personales y observaciones reales durante actividades de voluntariado educativo, se detecta que:

•	Muchos centros educativos rurales no incluyen orientación en carreras tecnológicas o creativas.

•	Se minimiza o ignora la importancia de las áreas tecnológicas y creativas que dominan el mercado laboral actual.

•	Como resultado, los estudiantes no descubren vocaciones modernas, no acceden a oportunidades educativas y se limita el desarrollo profesional local.

•	Las comunidades quedan rezagadas al no generar especialistas que impulsen crecimiento, innovación y competitividad.

Además, el MINEDUC ha trabajado planes para fortalecer capacidades digitales, pero aún no existe una herramienta interactiva, gratuita y accesible que motive vocaciones tecnológicas desde la escuela.

Este proyecto surge como una respuesta directa a esa brecha.








2.  La Solución


Futuro Sin Límites es una plataforma web gratuita diseñada para:

•	Inspirar y orientar vocacionalmente a estudiantes de educación básica y diversificado.

•	Integrarse dentro del aula como apoyo didáctico para docentes pero sobre todo, hacerla parte del alumnado que ellos tengan acceso total a ella.

•	Servir como herramienta piloto para MINEDUC, facilitando la ampliación de orientación tecnológica en zonas rurales.

El sitio ofrece:

•	Información clara sobre áreas profesiones tecnológicas y creativas

•	Mini-juegos y experiencias interactivas para despertar interés

•	 Contenido introductorio sobre programación, diseño, arquitectura, IA

•	 Listado de universidades, becas y oportunidades educativas

•	Progreso y marcadores para estudiantes registrados

El enfoque central es romper las barreras geográficas, económicas y educativas, democratizando el acceso a vocaciones modernas.








3.  Justificación


La plataforma aporta valor social, educativo y tecnológico porque:

Contenido amigable e interactivo:

No solo da texto y teoría, sino juegos y dinámicas simples que hacen que el estudiante experimente y se interese.
Conexión con el mundo real:

No se queda solo en “qué es programar” o “qué es diseño gráfico”, sino que conecta con universidades, cursos y oportunidades concretas.
Cuenta con Enfoque en comunidades rurales y aldeas:

•	No es una plataforma genérica; está pensada desde la realidad de estudiantes que, como yo, vienen de aldeas donde estas áreas casi no se mencionan.

•	Transforma vocaciones en comunidades que históricamente no han accedido a formación tecnológica.

•	Conecta educación con oportunidades reales: universidades, becas, carreras y cursos.

•	Promueve el desarrollo local, generando talento profesional en disciplinas altamente demandadas.

•	Es un posible proyecto escalable por Ministerio de Educación, como herramienta oficial de orientación para institutos del interior del país.
Su valor no es solo académico, sino humano y estratégico para Guatemala.







4.  Propuesta Técnica (Arquitectura)

1.Frontend

Para el desarrollo del frontend se consideraron tres tecnologías: React, Vue y Angular.

* React permite construir interfaces modernas a partir de componentes reutilizables y tiene una comunidad muy grande, con muchos recursos y librerías.

* Vue también es sencillo y ligero, pero con menor presencia en proyectos grandes de producción.

* Angular ofrece un ecosistema muy completo, aunque con una curva de aprendizaje más alta y una estructura más rígida.

Elección: se propone utilizar React junto con Next.js como base del frontend, porque permite crear una SPA con buena experiencia de usuario, soporta renderizado del lado del servidor y se integra fácilmente con el despliegue en la nube.


2. Backend y Publicación

Para el backend se propone utilizar Node.js, aprovechando el mismo entorno de Next.js para definir endpoints tipo REST que atiendan las operaciones principales del sistema (gestión de usuarios, áreas profesionales, recursos, progreso y ofertas formativas). Esto permite mantener frontend y backend en un solo proyecto y reducir la complejidad del despliegue.

La aplicación completa (frontend + backend) se publicará en Vercel, que está orientado a proyectos construidos con Next.js y facilita el despliegue continuo a partir del repositorio de GitHub. De esta forma, cualquier actualización del código se puede reflejar rápidamente en el entorno en línea que usarán los estudiantes y docentes.



5. Persistencia de Datos

Elección entre SQL y NoSQL

La información que maneja la plataforma es estructurada y presenta relaciones claras entre entidades: usuarios, áreas profesionales, recursos educativos, universidades, ofertas formativas y el progreso de cada usuario.
Por esta razón se propone utilizar una base de datos relacional SQL, concretamente PostgreSQL, que permite definir llaves primarias y foráneas, aplicar restricciones de integridad y realizar consultas con filtros y uniones entre tablas.

Diagrama



<img width="723" height="1088" alt="diagrama pgerd" src="https://github.com/user-attachments/assets/c034a60f-7b81-4a54-918c-373920de5916" />









6. Diseño de Interfaz de Programación (API) 

Endpoint 1: Obtener lista de áreas profesionales

•	Método: GET

•	Ruta: /api/areas

•	Descripción: Retorna el listado de áreas profesionales disponibles en la plataforma (programación, diseño gráfico, arquitectura, etc.).

Respuesta Exitosa (200 OK)

Tipo: JSON



<img width="847" height="569" alt="image" src="https://github.com/user-attachments/assets/2ad8e52e-a7aa-43ad-adc3-7b902cc34982" />




Endpoint 2: Obtener recursos educativos (con filtros)

•	Método: GET

•	Ruta: /api/recursos

•	Descripción: Retorna la lista de recursos educativos (videos, artículos, juegos) con filtros opcionales por área, tipo y nivel.
Parámetros de consulta (query params) opcionales:

•	id_area → filtra por área profesional (ej. 1 = Programación).

•	tipo → filtra por tipo de recurso (video, articulo, juego).

•	nivel → filtra por nivel (principiante, intermedio, etc.).

Ejemplo de llamada:

GET /api/recursos?id_area=1&tipo=video&nivel=principiante

Respuesta Exitosa (200 OK)

Tipo: JSON




<img width="807" height="706" alt="image" src="https://github.com/user-attachments/assets/e1ad66cd-0bdc-4f7d-9468-3ff40ac8e8cf" />}



Endpoint 3: Registro de usuario

•	Método: POST

•	Ruta: /api/registro

•	Descripción: Registra un nuevo usuario en la plataforma a partir de los datos enviados desde el formulario (nombre, correo, contraseña, etc.).

Cuerpo de la petición (Request Body – JSON):




<img width="609" height="405" alt="image" src="https://github.com/user-attachments/assets/4faaba58-b383-486d-8f65-0759552d1bd7" />




Respuesta Exitosa (201 Created)

Tipo: JSON


<img width="537" height="424" alt="image" src="https://github.com/user-attachments/assets/10aac6e5-6110-4db3-b37b-a9e92557307b" />




7. Planificación y Costos
   
Desglose de tareas principales con horas estimadas hasta alcanzar 450



<img width="387" height="379" alt="image" src="https://github.com/user-attachments/assets/d3f12fe7-1946-4fab-a326-1d4bb9914b33" />




Total, de Horas:
450 horas

Presupuesto:
Costo Hora:
$35 USD



Cálculo del costo total:
450 horas × $35 = $15,750 USD



<img width="392" height="60" alt="image" src="https://github.com/user-attachments/assets/b953069f-e2da-4cd6-8cb2-254b41f94811" />





8.  Archivo SQL(modelo de datos)


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








9. Capturas


<img width="1002" height="595" alt="image" src="https://github.com/user-attachments/assets/02a5b738-6a20-4b10-8b63-4b53b441d1d9" />





<img width="1019" height="550" alt="image" src="https://github.com/user-attachments/assets/028017cd-328c-4e00-b096-1772b81c244e" />




<img width="1338" height="640" alt="image" src="https://github.com/user-attachments/assets/2df6224b-f3e4-4a35-9924-3be2404aee82" />




<img width="995" height="592" alt="image" src="https://github.com/user-attachments/assets/25f7fb73-ce7a-4a42-8cf8-f9c4118f137e" />




<img width="982" height="579" alt="image" src="https://github.com/user-attachments/assets/4e826146-f83e-435f-b09f-dde7740aab37" />






9. Enlace de protototipo:
https://prototipo-fututo-sin-limites.vercel.app/


