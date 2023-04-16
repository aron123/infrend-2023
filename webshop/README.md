# Simple webshop project
This project is a monorepo for a simple webshop. It holds 3 modules of the application:

- `webshop-client` is an Angular web application. 
- `webshop-server` is an Express backend, that uses TypeORM for database operations.
- `webshop-models` contains DTO objects that describe the format of client-server communication.

NPM Workspaces are used to separate the modules.

## Installation
Run `npm install`

## Starting
In 2 different terminal windows, run:
- `npm run start:client`
- `npm run start:server`
