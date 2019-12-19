const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const recipesData = require('../db/recipes.json')
var Datastore = require('nedb')
const app = require('./app').app

var db = new Datastore({ timestampData: true })
db.insert(recipesData)

app.use(cors())
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
module.exports = app
