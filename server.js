```javascript
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/skills', require('./routes/api/skills'));
app.use('/api/users', require('./routes/api/users'));

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```