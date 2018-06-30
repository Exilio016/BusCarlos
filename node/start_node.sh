#!/bin/bash
export TESTING_MYSQL_URL="mysql://${DATABASE_HOST}:3306"

# See http://tldp.org/LDP/abs/html/devref1.html for description of this syntax.
while ! exec 6<>/dev/tcp/${DATABASE_HOST}/3306; do
    echo "$(date) - still trying to connect to mysql at ${TESTING_MYSQL_URL}"
    sleep 1
done

exec 6>&-
exec 6<&-

cd /app
npm install
cd /app
npm start
