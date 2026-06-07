# Notes API

A RESTful Notes API built using Node.js, Express.js, MongoDB Atlas, and Mongoose. This project demonstrates backend fundamentals such as routing, controllers, database integration, and CRUD operations.

## Features

* Create a Note
* Get All Notes
* Get a Note by ID
* Update a Note
* Delete a Note
* MongoDB Atlas Integration
* RESTful API Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Nodemon

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/notes-api.git
cd notes-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Run Project

```bash
npm run dev
```

## API Endpoints

### Create Note

```http
POST /api/notes
```

Request Body:

```json
{
  "title": "Learn Backend",
  "content": "Build Notes API"
}
```

### Get All Notes

```http
GET /api/notes
```

### Get Note By ID

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

## Project Structure

```text
src
├── controllers
├── models
├── routes
└── app.js

server.js
```

## Learning Outcomes

* REST API Development
* CRUD Operations
* MongoDB Atlas Integration
* Mongoose Models
* Express Routing
* Controller-Based Architecture

## Author

Vanshika Agrawal
