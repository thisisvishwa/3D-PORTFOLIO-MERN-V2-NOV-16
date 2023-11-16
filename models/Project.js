```javascript
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  links: [{
    type: String
  }]
});

module.exports = mongoose.model('Project', ProjectSchema);
```