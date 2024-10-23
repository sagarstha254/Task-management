Getting Started
Follow these steps to set up and run the project locally.

1. Clone the Repository
Clone this repository to your local machine using:

git clone https://github.com/sagarstha254/Task-management.git

2. Set Up the Backend
a. Navigate to the Backend Directory

cd task-management/backend

b. Install Dependencies
Install the required dependencies for the backend:

npm install

c. Set Up PostgreSQL Database
1 Start PostgreSQL and create a new database:

psql -U postgres
CREATE DATABASE task_management;

2 Update the .env File: Create a .env file in the backend directory and configure your database connection:

DATABASE_URL="postgresql://sagarshrestha:test123@localhost:5432/task_management"

d. Set Up Prisma
Run the following command to create the database tables:

npx prisma migrate dev --name init

3. Start the Backend Server
Start the backend server using:

npm run dev
You should see output indicating that the server is running on http://localhost:5432.

4. Set Up the Frontend
a. Navigate to the Frontend Directory

cd ../frontend

b. Install Dependencies
Install the required dependencies for the frontend:

npm install

5. Start the Frontend Development Server
Start the frontend development server using:

npm start
You should see the application running at http://localhost:3000.