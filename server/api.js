const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const recipes = require('../db/recipes.json')
var Datastore = require('nedb')
const consola = require('consola')

const app = express()

const port = 3030
const host = 'localhost'
let server

var db = new Datastore({ timestampData: true })
db.insert(recipes)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static('dist'))

/**
 * @api {get} /recipes List all Recipes
 * @apiSampleRequest http://localhost:3000/api/recipes
 * @apiGroup Recipes
 */
app.get('/api/recipes', async (req, res, next) => {
    db.find({}, function(err, recipes) {
        res.json({ recipes })
    })
})

/**
 * @api {post} /recipes Create a Recipe
 * @apiParam (Body){String} name
 * @apiParam (Body){String} image_url
 * @apiParam (Body){String} description
 * @apiParam (Body){Number} diners
 * @apiParam (Body){Boolean} isVegetarian
 * @apiParam (Body){Array} ingredients
 * @apiParam (Body){Array} instructions
 * @apiSampleRequest http://localhost:3000/api/recipes
 * @apiGroup Recipes
 */
app.post('/api/recipes', async (req, res, next) => {
    const recipe = req.body
    db.insert(recipe, function(err, newDoc) {
        res.json({ recipe })
    })
})

/**
 * @api {put} /recipes/{id} Update a Recipe
 * @apiParam (Body){String} name
 * @apiParam (Body){String} image_url
 * @apiParam (Body){String} description
 * @apiParam (Body){Number} diners
 * @apiParam (Body){Boolean} isVegetarian
 * @apiParam (Body){Array} ingredients
 * @apiParam (Body){Array} instructions
 * @apiSampleRequest http://localhost:3000/api/recipes/1
 * @apiGroup Recipes
 */
app.put('/api/recipes/:id', async (req, res, next) => {
    const recipe = req.body
    db.update({ _id: recipe._id }, recipe, {}, function(err) {
        res.json({ recipe })
    })
})

/**
 * @api {delete} /api/recipes/{id} Delete a Recipe
 * @apiSampleRequest http://localhost:3000/api/recipes/2
 * @apiGroup Recipes
 */
app.delete('/api/recipes/:id', async (req, res, next) => {
    db.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
        res.json({ id: req.params.id })
    })
})

app.use(function(err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})

app.listen(port, host)

consola.ready({
    message: `API Service listening on http://${host}:${port}`,
    badge: true
})
module.exports = { app, server }
