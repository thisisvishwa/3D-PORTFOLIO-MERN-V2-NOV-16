```javascript
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const auth = require('./middleware/auth');

// Routes
const projects = require('./routes/api/projects');
const skills = require('./routes/api/skills');
const users = require('./routes/api/users');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/projects', auth, projects);
app.use('/api/skills', auth, skills);
app.use('/api/users', users);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
```