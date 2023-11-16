```javascript
const request = require('supertest');
const app = require('../app');
const Skill = require('../models/Skill');

describe('Skills API', () => {
  let skillData = {
    title: 'JavaScript',
    icon: 'js-icon',
    description: 'Proficient in JavaScript',
    proficiency: 90
  };

  beforeEach(async () => {
    await Skill.deleteMany();
  });

  test('Should create a new skill', async () => {
    await request(app)
      .post('/api/skills')
      .send(skillData)
      .expect(201);
  });

  test('Should get all skills', async () => {
    const skill = new Skill(skillData);
    await skill.save();

    await request(app)
      .get('/api/skills')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toEqual(1);
      });
  });

  test('Should update a skill', async () => {
    const skill = new Skill(skillData);
    await skill.save();

    await request(app)
      .put(`/api/skills/${skill._id}`)
      .send({ proficiency: 95 })
      .expect(200)
      .then(response => {
        expect(response.body.proficiency).toEqual(95);
      });
  });

  test('Should delete a skill', async () => {
    const skill = new Skill(skillData);
    await skill.save();

    await request(app)
      .delete(`/api/skills/${skill._id}`)
      .expect(200)
      .then(async () => {
        const deletedSkill = await Skill.findById(skill._id);
        expect(deletedSkill).toBeNull();
      });
  });
});
```