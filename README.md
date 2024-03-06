# book app:
# 1. project.env file to the root, then pass this info to project.ent:
project.env:
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_DB=database
 
PGUSER=username
PGPASSWORD=password
PGDATABASE=database
 
PGHOST=postgresql_database
PGPORT=5432
 
FLYWAY_USER=username
FLYWAY_PASSWORD=password
FLYWAY_URL=jdbc:postgresql://postgresql_database:5432/database

# 2. cd ui, run : npm install
# 3. to the root: docker compose up


