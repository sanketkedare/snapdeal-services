# Snapdeal Services API Documentation

## Project Name: Snapdeal Services 
### Technology Stack: Node.js, MongoDB

This documentation will help you fetch data from Snapdeal's APIs, enabling you to integrate and utilize Snapdeal's web application services seamlessly.

## Overview

This document provides detailed information about the various API endpoints available in the Snapdeal web application. It includes information on user management, product handling, cart operations, and more.

## Authentication

Before accessing the APIs, ensure you have the necessary authentication tokens. Authentication is required for all endpoints to ensure data security and integrity.

## Endpoints

### Entry Point
- **URL:** `http://localhost:3001/`
- **Description:** The main entry point for the application.

### User Routes
- **Base URL:** `http://localhost:3001/api/user`

   - **Register (POST)**
     - **URL:** `http://localhost:3001/api/user/signup`
     - **Description:** Register a new user.
   
   - **Login (POST)**
     - **URL:** `http://localhost:3001/api/user/login`
     - **Description:** Authenticate a user and return a token.
   
   - **Logout (POST)**
     - **URL:** `http://localhost:3001/api/user/logout`
     - **Description:** Log out the current user and invalidate the token.
   
   - **Update (PATCH)**
     - **URL:** `http://localhost:3001/api/user/update`
     - **Description:** Update user information.
   
   - **Delete (DELETE)**
     - **URL:** `http://localhost:3001/api/user/delete`
     - **Description:** Delete a user account.

### Location Routes
- **Base URL:** `http://localhost:3001/api/location`

   - **Add Location (POST)**
     - **URL:** `http://localhost:3001/api/location`
     - **Description:** Add a new location.

### Products Routes
- **Base URL:** `http://localhost:3001/api/products`

   - **Get Products (GET)**
     - **URL:** `http://localhost:3001/api/products`
     - **Description:** Retrieve all products.

### Cart Routes
- **Base URL:** `http://localhost:3001/api/cart/`

   - **Get All Items (GET)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Retrieve all items in the cart.
   
   - **Add Products (POST)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Add products to the cart.
   
   - **Delete Product (DELETE)**
     - **URL:** `http://localhost:3001/api/cart`
     - **Description:** Remove a product from the cart.

### Short Routes
- **Base URL:** `http://localhost:3001/api/short/`

   - **Get All Items (GET)**
     - **URL:** `http://localhost:3001/api/short/`
     - **Description:** Retrieve all items in the short list.
   
   - **Add Products (POST)**
     - **URL:** `http://localhost:3001/api/short/add`
     - **Description:** Add products to the short list.
   
   - **Delete Product (DELETE)**
     - **URL:** `http://localhost:3001/api/short/delete`
     - **Description:** Remove a product from the short list.

## Error Handling

Each endpoint will return appropriate error messages in case of invalid requests or server errors. The following is a list of common error responses:

- **400 Bad Request:** The request could not be understood or was missing required parameters.
- **401 Unauthorized:** Authentication failed or user does not have permissions for the desired action.
- **404 Not Found:** The requested resource could not be found.
- **500 Internal Server Error:** An error occurred on the server.