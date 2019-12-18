const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const clientsData = require('../db/db.json')
const recipes = require('../db/recipes.json')
var Datastore = require('nedb')
const app = express()

var db = new Datastore()
db.insert(recipes)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    /**
     * Get all Recipes
     * @method GET /api/recipes
     * @apiParam (Body){String} type
     */
    app.get('/api/recipes', async (req, res, next) => {
        db.find({}, function(err, items) {
            res.json(items)
        })
    })

    /**
     * Create a Recipe
     * @method POST /api/recipes
     * @apiParam (Body){String} type
     */
    app.post('/api/recipes', async (req, res, next) => {
        db.find({}, function(err, items) {
            res.json(items)
        })
    })

    /**
     * Update a Recipe
     * @method PUT /api/recipes
     * @apiParam (Body){String} type
     */

    app.put('/api/recipes/:id', async (req, res, next) => {
        res.json({ id: req.params.id })
        // db.find({}, function(err, items) {
        //     res.json(req.query.id)
        // })
    })

    /**
     * Delete a Recipes
     * @method DELETE /api/recipes
     * @apiParam (Body){String} type
     */
    app.delete('/api/recipes/:id', async (req, res, next) => {
        res.json({ id: req.params.id })
        // db.find({}, function(err, items) {
        //     res.json(req.query.id)
        // })
    })

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start()
