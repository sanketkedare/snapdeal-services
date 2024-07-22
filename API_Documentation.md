
### `APIDocumentation.md`

This file will detail the API endpoints, including their purpose, URL structure, request formats, and responses.

```markdown
# Snapdeal Services API Documentation

## Project Name: Snapdeal Services 
### Technology Stack: Node.js, MongoDB

This documentation provides detailed information on how to interact with Snapdeal's APIs. It covers user management, product handling, cart operations, and more.

## Overview

This document outlines the various API endpoints available in the Snapdeal web application, including user management, product handling, cart operations, and short-listing items.

## Authentication

Authentication is required for accessing all endpoints to ensure data security and integrity. Ensure you have the necessary authentication tokens before making requests.

## Endpoints

### Entry Point
- **URL:** `http://localhost:3001/`
- **Description:** The main entry point of the application. Provides a simple message indicating the API is operational.

### User Routes
- **Base URL:** `http://localhost:3001/api/user`

   - **Register (POST)**
     - **URL:** `http://localhost:3001/api/user/signup`
     - **Description:** Register a new user.
     - **Request Body:**
       ```json
       {
         "email": "user@example.com",
         "password": "string",
         "name": "string",
         "isAdmin": boolean
       }
       ```

   - **Login (POST)**
     - **URL:** `http://localhost:3001/api/user/login`
     - **Description:** Authenticate a user and return a token.
     - **Request Body:**
       ```json
       {
         "email": "user@example.com",
         "password": "string"
       }
       ```

   - **Logout (POST)**
     - **URL:** `http://localhost:3001/api/user/logout`
     - **Description:** Log out the current user and invalidate the token.

   - **Update (PATCH)**
     - **URL:** `http://localhost:3001/api/user/update`
     - **Description:** Update user information.
     - **Request Body:**
       ```json
       {
         "email": "user@example.com",
         "name": "string",
         "password": "string"
       }
       ```

   - **Delete (DELETE)**
     - **URL:** `http://localhost:3001/api/user/:id`
     - **Description:** Delete a user account by ID.

### Location Routes
- **Base URL:** `http://localhost:3001/api/location`

   - **Get Location (GET)**
     - **URL:** `http://localhost:3001/api/location/:pin`
     - **Description:** Retrieve location details based on the PIN code.

### Products Routes
- **Base URL:** `http://localhost:3001/api/products`

   - **Get Products (GET)**
     - **URL:** `http://localhost:3001/api/products`
     - **Description:** Retrieve all products.

   - **Get Product (GET)**
     - **URL:** `http://localhost:3001/api/products/:id`
     - **Description:** Retrieve a single product by ID.

### Cart Routes
- **Base URL:** `http://localhost:3001/api/cart/`

   - **Get All Items (GET)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Retrieve all items in the cart.
     - **Query Parameters:**
       - `userEmail` (required): The email of the user whose cart items are to be retrieved.

   - **Add Products (POST)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Add products to the cart.
     - **Request Body:**
       ```json
       {
         "userEmail": "user@example.com",
         "cart": [ /* Array of cart items */ ]
       }
       ```

   - **Remove Product (DELETE)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Remove a product from the cart.
     - **Request Body:**
       ```json
       {
         "userEmail": "user@example.com",
         "productId": "string"
       }
       ```

### Short Routes
- **Base URL:** `http://localhost:3001/api/short/`

   - **Get All Items (GET)**
     - **URL:** `http://localhost:3001/api/short/`
     - **Description:** Retrieve all items in the short list.
     - **Query Parameters:**
       - `userEmail` (required): The email of the user whose short-list items are to be retrieved.

   - **Add Products (POST)**
     - **URL:** `http://localhost:3001/api/short/`
     - **Description:** Add products to the short list.
     - **Request Body:**
       ```json
       {
         "userEmail": "user@example.com",
         "short": [ /* Array of short-list items */ ]
       }
       ```

   - **Remove Product (DELETE)**
     - **URL:** `http://localhost:3001/api/short/`
     - **Description:** Remove a product from the short list.
     - **Request Body:**
       ```json
       {
         "userEmail": "user@example.com",
         "productId": "string"
       }
       ```

## Error Handling

Common error responses for invalid requests or server issues:

- **400 Bad Request:** The request could not be understood or was missing required parameters.
- **401 Unauthorized:** Authentication failed or user does not have permissions for the desired action.
- **404 Not Found:** The requested resource could not be found.
- **500 Internal Server Error:** An error occurred on the server.


