const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

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

    app.get('/api/recipes', async (req, res, next) => {
        res.json({
            recipes: [
                {
                    ingredients: [
                        {
                            ingredient: 'fdfddf'
                        },
                        {
                            ingredient: 'dfddf'
                        }
                    ],
                    instructions: [
                        {
                            step: 'fddffd'
                        },
                        {
                            step: 'fddfd'
                        }
                    ],
                    name: 'New Recip',
                    image_url:
                        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/44/2048x1024/landscape-1509399305-shot-2-105.jpg?resize=768:*',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    diners: '2',
                    isVegetarian: true,
                    id: 9
                },
                {
                    ingredients: [
                        {
                            ingredient: 'dsds'
                        },
                        {
                            ingredient: 'sdsdssd'
                        },
                        {
                            ingredient: 'sdsdsd'
                        },
                        {
                            ingredient: 'ssdsd'
                        },
                        {
                            ingredient: 'dssdd'
                        }
                    ],
                    instructions: [
                        {
                            step: 'dsdsds'
                        },
                        {
                            step: 'ssdds'
                        },
                        {
                            step: 'ssdds'
                        },
                        {
                            step: 'dssdds'
                        }
                    ],
                    name: 'test',
                    image_url:
                        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/44/2048x1024/landscape-1509399305-shot-2-105.jpg?resize=768:*',
                    description: 'sddsds',
                    diners: '4',
                    isVegetarian: true,
                    id: 10
                },
                {
                    ingredients: [
                        {
                            ingredient: 'dddd'
                        },
                        {
                            ingredient: 'ddd'
                        },
                        {
                            ingredient: 'ddd'
                        }
                    ],
                    instructions: [
                        {
                            step: 'dd'
                        },
                        {
                            step: 'ddd'
                        },
                        {
                            step: 'ddd'
                        }
                    ],
                    name: 'sdsd',
                    image_url:
                        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/44/2048x1024/landscape-1509399305-shot-2-105.jpg?resize=768:*',
                    description: 'dfdfdffd',
                    diners: '3',
                    isVegetarian: true,
                    id: 11
                }
            ]
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
