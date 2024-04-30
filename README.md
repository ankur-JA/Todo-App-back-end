
# Todo-App-back-end

## Overveiw
This backend application provides the server-side functionality for a todo management system. Users can sign up, sign in, view their todos, add new todos, and delete existing todos. Access control measures have been implemented to ensure the security of user data.

## Features
- **User Authentication**: Users can sign up for an account and sign in to access their todos.
- **Todo Management**: Users can view their existing todos, add new todos, and delete existing todos.
- **Access Control**: Measures have been implemented to prevent unauthorized access to user data.
- **Secure Authentication**: User authentication is handled securely to protect user credentials and data.
- **RESTful API**: The backend exposes a RESTful API for communication with the frontend client.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and todos.
- **JWT (JSON Web Tokens)**: Used for secure authentication and authorization.
- **bcrypt**: Library for hashing passwords to enhance security.
- **Middleware**: Express middleware for handling authentication and access control.

## API Endpoints
- **POST /api/signup**: Create a new user account.
- **POST /api/signin**: Sign in to an existing user account.
- **GET /api/todos**: Retrieve all todos for the authenticated user.
- **GET /api/todo/:id**: Retrieve specified todo for the authenticated user.
- **POST /api/todo**: Add a new todo for the authenticated user.
- **DELETE /api/todo/reset**: Delete all todo for the authenticated user.
- **DELETE /api/todos/:id**: Delete a todo with the specified ID for the authenticated user.
- **PUT /api/todo/:id**: Update the todo for the authenticated user.
