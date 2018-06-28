FROM mysql:5.7.22

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE buscarlos
ENV MYSQL_USER user
ENV MYSQL_PASSWORD pass

ADD ./database_init.sql /docker-entrypoint-initdb.d
ADD ./charset.cnf /etc/mysql/conf.d/custom.cnf
