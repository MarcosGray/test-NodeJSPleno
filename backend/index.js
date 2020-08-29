// require('dotenv/config')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const whiteList = require('./utils/cors')

class AppController {
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors({
            origin: (origin, callback) => {
                if (whiteList.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback('Not allowed by CORS')
                }
            }
        }))
    }

    routes() {
        this.express.use(routes)
    }
}

module.exports = new AppController().express
