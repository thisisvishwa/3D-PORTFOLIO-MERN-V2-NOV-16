```javascript
const request = require('supertest');
const app = require('../app');

describe('Server', () => {
  it('should be running and return a 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('should return a 404 for non-existent routes', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.statusCode).toEqual(404);
  });
});
```