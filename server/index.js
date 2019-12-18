const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const clientsData = require('../db/db.json')
const recipes = require('../db/recipes.json')
var Datastore = require('nedb')
const app = express()

var db = new Datastore()
db.insert(recipes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
     * @api {get} /recipes List all Recipes
     * @apiGroup Recipes
     */
    app.get('/api/recipes', async (req, res, next) => {
        db.find({}, function(err, items) {
            res.json(items)
        })
    })

    /**
     * @api {post} /recipes Create a Recipe
     * @apiParam (Body){String} name
     * @apiGroup Recipes
     */
    app.post('/api/recipes', async (req, res, next) => {
        // const recipe = req.body
        db.insert(req.body, function(err, newDoc) {
            res.json({ recipe: req.body })
        })
    })

    /**
     * @api {put} /recipes Update a Recipe
     * @apiParam (Body){String} name
     * @apiGroup Recipes
     */
    app.put('/api/recipes/:id', async (req, res, next) => {
        const recipe = req.body
        db.update({ _id: recipe._id }, recipe, {}, function(err) {
            res.json(recipe)
        })
    })

    /**
     * @api {delete} /recipes Delete a Recipe
     * @apiParam (Body){String} name
     * @apiGroup Recipes
     */
    app.delete('/api/recipes/:id', async (req, res, next) => {
        db.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
            res.json({ id: req.params.id })
        })
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
