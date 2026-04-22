FROM mongo:latest

COPY validation.js  /docker-entrypoint-initdb.d/01_validation.js
COPY data.js  /docker-entrypoint-initdb.d/02_data.js
COPY queries.js  /queries.js
