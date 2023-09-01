#!/bin/bash

# Preconfigure Postgres to make sure it allows incoming connections
# See https://stackoverflow.com/a/3278835
sed -i "s/^#listen_addresses = .*/listen_addresses = '*'/g" /etc/postgresql/14/main/postgresql.conf
echo 'host    all             all             0.0.0.0/0           scram-sha-256' >> /etc/postgresql/14/main/pg_hba.conf

echo -e "\nSetting up PostgreSQL datasource..."

service postgresql start

su postgres -c "psql -c \"CREATE DATABASE legend;\""

su postgres -c "psql -d legend -f /app/datasources/postgres-setup.sql"

su postgres -c "psql -c \"ALTER USER postgres PASSWORD 'postgres';\""

echo -e "\n"