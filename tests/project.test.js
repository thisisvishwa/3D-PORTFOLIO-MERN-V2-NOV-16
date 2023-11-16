```javascript
const request = require('supertest');
const app = require('../app');
const Project = require('../models/Project');

describe('Project API', () => {
    let projectId;

    beforeAll(async () => {
        await Project.deleteMany();

        const project = new Project({
            title: 'Test Project',
            description: 'This is a test project',
            images: ['image1.jpg', 'image2.jpg'],
            links: ['https://testproject.com']
        });

        const savedProject = await project.save();
        projectId = savedProject._id;
    });

    test('should get all projects', async () => {
        const res = await request(app).get('/api/projects');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('projects');
    });

    test('should get a project by id', async () => {
        const res = await request(app).get(`/api/projects/${projectId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('project');
        expect(res.body.project.title).toEqual('Test Project');
    });

    test('should create a new project', async () => {
        const res = await request(app)
            .post('/api/projects')
            .send({
                title: 'New Project',
                description: 'This is a new project',
                images: ['image3.jpg', 'image4.jpg'],
                links: ['https://newproject.com']
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('project');
        expect(res.body.project.title).toEqual('New Project');
    });

    test('should update a project', async () => {
        const res = await request(app)
            .put(`/api/projects/${projectId}`)
            .send({
                title: 'Updated Project',
                description: 'This is an updated project',
                images: ['image5.jpg', 'image6.jpg'],
                links: ['https://updatedproject.com']
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('project');
        expect(res.body.project.title).toEqual('Updated Project');
    });

    test('should delete a project', async () => {
        const res = await request(app).delete(`/api/projects/${projectId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('Project deleted');
    });

    afterAll(async () => {
        await Project.deleteMany();
    });
});
```