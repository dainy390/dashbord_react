Frontend:

Built with React.js

Styled using Tailwind CSS

Features: Signup, Login, Dashboard with CRUD tasks, Search & Filter

Backend:

Built with Node.js + Express

JWT-based authentication

APIs for:

/api/users/signup – User registration

/api/users/login – User login

/api/users/profile – Fetch user profile

/api/tasks – CRUD tasks

Connected to MongoDB

README.md:

Includes instructions for setting up and running frontend & backend

Example commands:

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start


Postman Collection / API Docs:

Postman collection link: https://www.postman.com/(https://web.postman.co/workspace/7556f732-d0a0-477b-8c7a-4c1a632f3012/collection/38014287-ca0faf26-f450-4f15-85a9-ea9f20775901?action=share&source=copy-link&creator=38014287)

Scalability Notes:

Frontend:

Component-based structure for modularity

State management via Context API (can be upgraded to Redux for larger apps)

Lazy loading routes for faster initial load

Backend:

JWT middleware for secure authentication

Modular route and controller structure for scalability

MongoDB indexing for efficient queries

Can be containerized with Docker for scaling using Kubernetes
