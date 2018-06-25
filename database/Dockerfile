FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_DATABASE buscarlos  
ENV MYSQL_USER root  
ENV MYSQL_PASSWORD root

ADD creates/create_tables.sql /docker-entrypoint-initdb.d
ADD inserts/insert_horario.sql /docker-entrypoint-initdb.d
ADD inserts/insert_linha.sql /docker-entrypoint-initdb.d
ADD inserts/insert_linha_rua.sql /docker-entrypoint-initdb.d
ADD inserts/insert_rua.sql /docker-entrypoint-initdb.d
