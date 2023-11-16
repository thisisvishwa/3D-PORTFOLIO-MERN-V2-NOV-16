```javascript
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Skill = require('../../models/Skill');

// @route   GET api/skills
// @desc    Get all skills
// @access  Public
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/skills
// @desc    Create a skill
// @access  Private
router.post('/', auth, async (req, res) => {
  const { title, icon, description, proficiency } = req.body;

  try {
    let skill = new Skill({
      title,
      icon,
      description,
      proficiency
    });

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/skills/:id
// @desc    Delete a skill
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    await Skill.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Skill removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
```