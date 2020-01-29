const app = require('../server/index') // Link to your server file
const supertest = require('supertest')
const axios = require('axios')
const request = supertest(app)

// test.before('Init Nuxt.js', async t => {
//     // stuff...
//     nuxt.listen(3000, 'localhost')
//     // Set base URL for axios to the nuxt server
//     axios.defaults.baseURL = 'http://localhost:3000'
//     axios.defaults.headers.common['Accept'] = 'application/json'
// })

describe('gets the test endpoint', async done => {
    before(function() {
        nuxt.listen(3000, 'localhost')
        // Set base URL for axios to the nuxt server
        axios.defaults.baseURL = 'http://localhost:3000'
        axios.defaults.headers.common['Accept'] = 'application/json'
    })
    it('Route /api exists and emits json', async t => {
        const response = await axios.get('/api/recipes')
        logger.info(`response.data = ` + response.data)
    })
})
