Steps to Run the Backend Locally:
Clone the Repository:

Use the git repository link provided by Amplication to clone the repository to your local machine.
Remove Docker Configuration:

Delete Dockerfile and docker-compose.yml if they exist in the cloned repository.
Install Dependencies:

Navigate to the directory and run:
npm install
Set Up Environment Variables:

Create a .env file at the root of your project and configure your MongoDB connection and other environment variables as required. Example:
DATABASE_URL=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
Run the Backend:

Start the Node.js server using:
npm run start
Now your backend is set up with Node.js, MongoDB, and it will run on your local server without Docker.

Post-Backend Setup:
React Frontend:
Set up a React.js frontend application separately and configure it to interact with the backend API endpoints.
