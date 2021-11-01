docker build --no-cache -f SQL\Dockerfile.PostgreSql -t newtest3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t newtest3/app ../..
