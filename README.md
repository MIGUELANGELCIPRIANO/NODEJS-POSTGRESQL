# NODEJS-POSTGRESQL

<img width="50%" src="https://i.postimg.cc/wTQH480V/NODEJS-POSTGRESQL.png" />

## INTRODUCTION

In this project we will learn how to connect our **Node.js** server to a **PostgreSQL** server and do basic CRUD queries using an npm module called "pg", which allows us to handle queries using promises or async/await.

## TECHNOLOGIES

- Node.js
- PostgreSQL

## INSTALLATION

1. Install the recommended version for most users of **Node.js** from the following link.

https://nodejs.org/en

2. Install the latest stable version of **PostgreSQL** from the following link.

https://www.postgresql.org/

3. Use the **npm** package manager to install.
4. Execute the command from the terminal located in ./NODEJS-POSTGRESQL.

```shell
npm i
```

5. Create a database using the commands located in the database.sql file.
6. Create an .env file inside ./NODEJS-POSTGRESQL and replace `userpostgres` and `passwordpostgres` with your credentials.

```js
DB_USER = userpostgres
DB_HOST = localhost
DB_PASSWORD = passwordpostgres
DB_NAME = library
```

## EXECUTION

7. Execute the command from the terminal located at ./NODEJS-POSTGRESQL to run the functions one by one.

```shell
node index.js
```
