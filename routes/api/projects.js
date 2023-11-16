```javascript
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Project = require('../../models/Project');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/projects
// @desc    Create a project
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
      links: req.body.links,
      user: req.user.id
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    // Check user
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await project.remove();
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
```