const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  proficiency: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Skill', SkillSchema);