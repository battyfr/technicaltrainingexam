# Training Registration System

## Introduction
This project is a simple web application used
for student training registration.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Git and GitHub

## Application Features
- Student registration
- Name and email input
- Course selection
- Store registration details in MongoDB

## Project Structure

training-registration/
- app.js
- package.json
- Dockerfile
- compose.yaml
- .env.example
- .gitignore
- .dockerignore
- README.md

## Environment Configuration

MONGO_URL=mongodb://mongo:27017/training

## Docker Commands

Build image:

docker build -t training-registration:v1 .

Run application:

docker compose up -d --build

Check containers:

docker ps

View logs:

docker logs training-app

Stop application:

docker compose down

## Application URL

http://localhost:3000

## Conclusion

The application was successfully containerised
using Docker and deployed using Docker Compose.
Git was used for version control and GitHub
was used to store the project repository.
