
const request = require('supertest');
const app = require('../src/app');
const api = request(app);

describe('Get methods', ()=>{
    test('Should respond with a 200 status code', async ()=>{
        await api
            .get('/')
            .expect(200);
    });
});

// describe('Get /', ()=>{
//     test('Should respond with a 200 status code', async ()=>{
//         const response = await request(app).get('/').send();
//         expect(response.status).toBe(200)
//     })
// })