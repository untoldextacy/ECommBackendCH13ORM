# E-Commerce API

Welcome to the E-Commerce API, a powerful and flexible application designed to manage products, categories, and tags for your online store! Created by Chuck Van-Lare, this API enables seamless integration with a PostgreSQL database, allowing you to efficiently manage your inventory and enhance the shopping experience.

## Features

- **Product Management**: Add, update, and delete products with ease. Keep track of pricing, stock levels, and categories.
- **Category Organization**: Organize products into categories for a better user experience and easier navigation.
- **Tagging System**: Use tags to categorize products further, making it easy for customers to find what they’re looking for.
- **RESTful API**: Access data through intuitive endpoints that allow for CRUD (Create, Read, Update, Delete) operations.

## Installation

To get started with the E-Commerce API, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/untoldextacy/ECommBackendCH13ORM.git
   cd ECommBackendCH13ORM
   ```

2. **Install Dependencies**: 
   Ensure you have Node.js installed, then run:
   
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**: 
   Create a `.env` file in the root directory of the project and add your PostgreSQL credentials:
   
  ```  env
  DB_NAME='ecommerce_db'
  DB_USER=''
  DB_PASSWORD=''
 ```

5. **Run Database Migrations**: 
   If you are using Sequelize, you may need to sync your database:
   ```bash
   npm run sync
   ```


6. **Seed Database**
   Seed your database in your terminal by using this command

```seed
npm run seed
```

7. **Start the Server**: 
   Run the following command to start the server:
   
   ```bash
   npm start
   ```
