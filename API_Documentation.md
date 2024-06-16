# API Documentation || Snapdeal - Webapp

*This documentation will help you fetch data from Snapdeal's APIs, enabling you to integrate and utilize Snapdeal's web application services seamlessly.*

## Overview


## Authentication

**Before accessing the APIs, ensure you have the necessary authentication tokens. Authentication is required for all endpoints to ensure data security and integrity.**

## Endpoints

1] Entry point for application - http://localhost:3001/

2] User Routes - http://localhost:3001/api/user

   - Register (POST)   - http://localhost:3001/api/user/signup
   - Login    (POST)   - http://localhost:3001/api/user/login
   - Logout   (POST)   - http://localhost:3001/api/user/logout
   - Update   (PATCH)  - http://localhost:3001/api/user/update
   - Delete   (DELETE) - http://localhost:3001/api/user/delete

3] Location Routes (POST) - http://localhost:3001/api/location

4] Products Routes (GET) - http://localhost:3001/api/products

5] Cart Routes - http://localhost:3001/api/cart/

   - Get ALL       (GET)    - http://localhost:3001/api/cart
   - Add Products  (POST)   - http://localhost:3001/api/cart
   - DeleteProduct (DELETE) - http://localhost:3001/api/cart

6] Short Routes - http://localhost:3001/api/short/

   - Get ALL       (GET)    - http://localhost:3001/api/short/
   - Add Products  (POST)   - http://localhost:3001/api/short/add
   - DeleteProduct (DELETE) - http://localhost:3001/delete/


## Error Handling

**Each endpoint will return appropriate error messages in case of invalid requests or server errors. The following is a list of common error responses:**

- 400 Bad Request: The request could not be understood or was missing required parameters.
- 401 Unauthorized: Authentication failed or user does not have permissions for the desired action.
- 404 Not Found: The requested resource could not be found.
- 500 Internal Server Error: An error occurred on the server.