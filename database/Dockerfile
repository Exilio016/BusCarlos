FROM mysql:5.7.22

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE buscarlos
ENV MYSQL_USER user
ENV MYSQL_PASSWORD pass

ADD creates/create_tables.sql /docker-entrypoint-initdb.d
ADD inserts/insert_linha.sql /docker-entrypoint-initdb.d
ADD inserts/insert_rua.sql /docker-entrypoint-initdb.d
