# Object-Relational Mapping (ORM): E-Commerce Back End

## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.
This project is the back end for an e-commerce site by creating and configuring a working Express.js API to use Sequelize to interact with a MySQL database.

## Video :

To see how the application works click the following:

- <a href='https://drive.google.com/file/d/1olYhwqL7l6MGR6DnwRq9S2GOkhSUsGPe/view?usp=sharing'> Categories</a>
- <a href='https://drive.google.com/file/d/1-fTBCsefklvPdAGbQFu5ys-gRgjl49UC/view?usp=sharing'> Products</a>
- <a href='https://drive.google.com/file/d/10XNxExuhT2D2PD06F3igekRLhctNjkVz/view?usp=sharing'> Tags</a>

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

Run the following script to install the packages required for the application:

```
npm install express

npm install mysql2

npm install sequelize

npm install dotenv

npm install nodemon -D

```

## Scripts

Ensure that the package.json file has the following script:

```
"start": "node src/server.js",

"dev": "nodemon src/server.js",

"seed": "node src/seeds/index.js"

```

## Usage

To use the application run the following script:

```
npm run start

npm run seed

npm run dev

```

## Tools/Technologies

- node.js
- express Js
- sequelize
- mysql2
- nodemon
- JavaScript
