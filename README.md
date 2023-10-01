# todolist
1. Introduction
This MERN stack TodoList application allows users to manage their tasks efficiently. Users can create an account, log in, create new todos, update them, and mark them as complete or incomplete. JWT is used for authorization, and the frontend is built using Create React App and Material-UI components.

2. Project Setup
2.1 Prerequisites
Node.js installed on your system.
MongoDB account and a database URL.

2.2 Installation
Client:
cd client
npm install
Server:
cd server
npm install

4. Folder Structure
3.1 Client
src: Contains React components and styles.
public: Contains the HTML template and static assets.
3.2 Server
index.js: Entry point of the server.
routes: Contains API routes for authentication and todo operations.
models: Contains MongoDB schema models.

5. Configurations
4.1 MongoDB Connection
In the server/index.js file, update the mongodbURI variable with your MongoDB database URL.


6. Authentication
5.1 Signup
Users can create an account by providing a unique username and password.
JWT tokens are issued upon successful registration.
5.2 Login
Registered users can log in with their username and password.
JWT tokens are verified for successful login.

6. Todo Operations
6.1 Create Todo
Authenticated users can create new todos by providing a task description.
JWT token must be included in the request header for authorization.
6.2 Update Todo
Users can update the description of existing todos.
JWT token must be included in the request header for authorization.
6.3 Mark as Complete/Incomplete
Todos can be marked as complete or incomplete based on user interaction.
Completed todos are visually differentiated from incomplete ones.

8. Running the Application
Client:
cd client
npm run start
The client will run on http://localhost:3000.

Server:
cd server
npm run nodemon
The server will run on http://localhost:3001.

8. Conclusion
Congratulations! You have successfully set up  your MERN stack TodoList application. Users can now efficiently manage their tasks through the intuitive user interface, built with Create React App and Material-UI components. Authentication and authorization are handled using JWT tokens, ensuring a secure user experience.
