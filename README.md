# Project Name

This is project is frontend of my E-commerce Website. It was developed with React Js, CSS, and Material UI.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
  - [Packages](#packages)
  - [Installation](#installation)
  

## About

The purpose of this project is to create a user friendly e-commerce website using the MERN stack (MongoDB, Express.js, React JS).

## Features

This is website have the following features:

- User can login with google account.
- User can save their cart product list in their account or locally.
- User can place order either by cash on deliver or stripe.

## Environment Variables

The project uses the following environment variables:

- `VITE_API_URL`: Specifies the URL for the backend API.
- `VITE_AUDIENCE`: Specifies the audience for the Auth0 authentication.
- `VITE_AUTH0_SCOPE`: Specifies the scope for the Auth0 authentication.
- `VITE_CLIENT_ID`: Specifies the client ID for Auth0.
- `VITE_DOMAIN`: Specifies the domain for Auth0.
- `VITE_STRIPE_PUBLIC_KEY`: Specifies the public key for Stripe integration.


## Packages

This project utilizes several npm packages to facilitate the development process. Below is a list of the key packages used:

### Authentication & Authorization
- `@auth0/auth0-react`: ^2.2.4

### Styling & UI Libraries
- `@emotion/react`: ^11.11.3
- `@emotion/styled`: ^11.11.0
- `styled-components`: ^6.1.6
- `@mui/material`: ^5.15.2
- `@mui/icons-material`: ^5.15.2
- `@mui/styled-engine-sc`: ^6.0.0-alpha.10

### Form Management & Validation
- `@hookform/resolvers`: ^3.3.4
- `react-hook-form`: ^7.49.3
- `zod`: ^3.22.4

### State Management & Redux
- `@reduxjs/toolkit`: ^2.0.1
- `react-redux`: ^9.0.4

### Routing
- `react-router-dom`: ^6.21.1

### API & HTTP Requests
- `axios`: ^1.6.7

### Stripe Integration
- `@stripe/react-stripe-js`: ^2.6.0
- `@stripe/stripe-js`: ^3.0.8

### Core React Libraries
- `react`: ^18.2.0
- `react-dom`: ^18.2.0

### JWT Handling
- `react-jwt`: ^1.2.0


## Installation

To install dependencies

```bash
npm install
```

To start server

```bash
npm run dev
```
