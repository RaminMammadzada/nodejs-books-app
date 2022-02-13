# Backend NodeJS Application for Books Search and Bookmark

This repository is for book application to search for books using Google Books API and bookmark the books wanted. It is a backend application to present a user authentication with JWT and CRUD skills using NodeJS. This repo is for the backend server purpose for [this frontend application](https://github.com/RaminMammadzada/react-books-app). After following in this README and running the backend application, you need to go that frontend application and follow the running steps in there. 

## Built with the following tech stack

- [Node.js](www.nodejs.org)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [cookie-session](https://www.npmjs.com/package/cookie-session)
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [nodemon](https://www.npmjs.com/package/nodemon)
- SCSS/CSS

### Prerequisites
You will need to have the following tech stack installed in your local environment.

- MySQL Ver 8.0.28
- NodeJS v14.18.x
- npm v6.14.x

### Setup

Clone the repo by typing

```
git clone https://github.com/RaminMammadzada/nodejs-books-app.git
```

Cd indo the project

```
cd nodejs-books-app
```

Install packages with

```
  npm install
```

Create database with Sequelize-cli command

```
  npx sequelize-cli db:create
```

Migrate models with Sequelize-cli command

```
  npx sequelize-cli db:migrate
```

Seed Books data with Sequelize-cli command

```
  npx sequelize-cli db:seed:all
```

If all is set, you will have a database with the name `books_api_dev` created and 2 tables called Users and Books created inside it.

Start server with:

```
  npm run start
```

It will start running in PORT 4000.
You can test the following endpoints in http://localhost:4000 url:

```

/GET http://localhost:4000/books/
/GET http://localhost:4000/books/:id
/POST http://localhost:4000/books/
/PUT http://localhost:4000/books/:id
/DELETE http://localhost:4000/books/:id
```

```
/POST http://localhost:4000/auth/signup
/POST http://localhost:4000/auth/signin
/POST http://localhost:4000/auth/signout
```

### Unit tests

Unit tests not implemented yet.

## Author

👤 **Ramin Mammadzada**

- Github: [@raminmammadzada](https://github.com/raminmammadzada)
- Twitter: [@raminmammadzada](https://twitter.com/raminmammadzada)
- Linkedin: [Ramin Mammadzada](https://www.linkedin.com/in/raminmammadzada/)

### Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/RaminMammadzada/nodejs-books-app/issues)

### Show your support

Give a star if you like this project!