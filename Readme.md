# Ecommerce API-Pro

# Description

This is an API based project where various end points were designed to allow Admin to interact with the Ecomm platform.

# Features

- Adding products with name and quantity
- Get list of all products 
- Delete a particular product 
- Update a particular product with the quantity

# Components

HTML,CSS,Javascript,
Node.js,MongoDB,Express.js and EJS

# How to Install

- Clone the project onto your local machine.
- Run 'npm install' to install required dependencies.
- Run 'npm start' in terminal to start server.
- Visit your app at http://localhost:8000.
- Then open Postman to query to the app and enjoy the responses

# Project Dependencies

    "cookie-parser": "^1.4.6",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.7",
    "express": "^4.18.1",
    "express-session": "^1.17.2",
    "mongoose": "^6.3.1",
    "path": "^0.12.7"

# Action Routes


- POST : '/products/create' >> Create product with name and quantity of product

- GET : '/products' >> Get list of all products in the app

- DELETE : '/products/:id' >> Delete a particular order with specified id

- POST : '/products/:id/update_quantity' >> Update specified product with a pecified quantity


# Link To App
[E-comm API-PRO](https://ecomm-api-pro.herokuapp.com/)