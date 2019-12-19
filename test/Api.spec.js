const request = require('supertest')
const app = require('../server/app').app
const server = require('../server/app').server
const recipeMockup = require('./mocks/').recipe

describe('API REST Endpoints', () => {
    it('should retrieve a list recipes', async () => {
        const res = await request(app).get('/api/recipes')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('recipes')
    })

    it('should create a new recipes', async () => {
        const res = await request(app)
            .post('/api/recipes')
            .send(recipeMockup)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('recipe')
    })

    it('should update a  recipe', async () => {
        const res = await request(app)
            .put('/api/recipes/1')
            .send(recipeMockup)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('recipe')
    })

    it('should delete a  recipe', async () => {
        const res = await request(app).delete('/api/recipes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
    })
    afterAll(() => {
        server.close()
    })
})
