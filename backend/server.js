require('dotenv/config')
const app = require('./index')

const port = process.env.SERVER_PORT || 4000

app.listen(port, err => {
    if (err) {
        console.log('Server not running...')
    } else {
        console.log('Server running at port: ' + port)
    }
})