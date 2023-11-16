```javascript
const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const { setupDatabase, userOne, userOneId } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should signup a new user', async () => {
    const response = await request(app).post('/api/users').send({
        name: 'Test user',
        email: 'test@example.com',
        password: 'MyPass777!'
    }).expect(201);

    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    expect(response.body).toMatchObject({
        user: {
            name: 'Test user',
            email: 'test@example.com'
        },
        token: user.tokens[0].token
    });
    expect(user.password).not.toBe('MyPass777!');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/api/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login nonexistent user', async () => {
    await request(app).post('/api/users/login').send({
        email: 'nonexistent@example.com',
        password: 'nonexistentPass!'
    }).expect(400);
});

test('Should get profile for user', async () => {
    await request(app)
        .get('/api/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/api/users/me')
        .send()
        .expect(401);
});

test('Should delete account for user', async () => {
    await request(app)
        .delete('/api/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/api/users/me')
        .send()
        .expect(401);
});
```