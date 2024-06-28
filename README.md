# SocialLink API

## Description
SocialLink is a social media API that facilitates profile creation, friend connections, and thought sharing. It follows the MVC architecture with Express.js for the server, MongoDB for the database, and Mongoose for data modeling. Key features include user authentication, data validation, and error handling.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation
Clone the repository:
```sh
git clone https://github.com/your-username/sociallink.git
cd sociallink
npm install 
```

## API Endpoints

 ### Users
- GET /api/users: Get all users.
- GET /api/users/:id: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update a user by ID.
- DELETE /api/users/:id: Delete a user by ID.
- POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

### Thoughts
- GET /api/thoughts: Get all thoughts.
- GET /api/thoughts/:id: Get a single thought by ID.
- POST /api/thoughts: Create a new thought.
- PUT /api/thoughts/:id: Update a thought by ID.
- DELETE /api/thoughts/:id: Delete a thought by ID.
- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Technologies Used
- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB: NoSQL database for storing data.
- Mongoose: MongoDB object modeling tool designed for Node.js.
- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.

## License
This project is licensed under the MIT License.

### Contact
For inquiries, please contact Rachel Vanetta.


