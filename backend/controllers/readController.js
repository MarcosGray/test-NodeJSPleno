const fs = require('fs')

const index = (req, res) => {
    const points = JSON.parse(fs.readFileSync('./data/poi.json', 'utf8'))
    return res.json(points)
}

module.exports = {
    index
}