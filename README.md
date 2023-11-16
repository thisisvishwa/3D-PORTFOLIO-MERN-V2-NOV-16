# 3D Portfolio MERN Stack App

## Overview

The 3D Portfolio app is a portfolio website for developers to showcase their work and skills in a 3D interactive environment. Users can navigate through a 3D world to view project details, technical skills, experience, and contact info.

This app is built using the MERN stack - MongoDB, Express, React, Node.js. It has a React frontend with Three.js for 3D rendering, and a Node/Express backend connecting to a MongoDB database.

## Features

- **3D World**: The core of the app is a 3D environment built with Three.js. Users can navigate through this world to different sections.
- **Projects Section**: An area to showcase coding projects. Each project can have a title, description, images, and links.
- **Skills Section**: An area to showcase technical skills. Each skill can have a title, icon, description, and proficiency level.
- **About Section**: Details about the developer - bio, experience, education, contact info.
- **Admin Panel**: A protected area for the developer to add/edit projects, skills, and about content.
- **Responsive Design**: The app is designed mobile-first and works seamlessly on all devices.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- npm

### Installing

1. Clone the repo
```
git clone https://github.com/your_username_/3D-Portfolio-MERN-Stack-App.git
```
2. Install NPM packages
```
npm install
```
3. Enter your MongoDB URI in `config/db.js`
4. Start the server
```
npm start
```

## Usage

After starting the server, open your web browser and navigate to `http://localhost:5000` to start exploring the 3D Portfolio app.

## Running the tests

Run the following command to execute the unit and integration tests via Jest:

```
npm test
```

## Built With

- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Server Framework
- [React.js](https://reactjs.org/) - Web Framework
- [Node.js](https://nodejs.org/en/) - Runtime Environment
- [Three.js](https://threejs.org/) - 3D Library

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc