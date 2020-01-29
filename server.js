const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')})
require('./connect')
require('./models/Todo')
const app = require('./app')

app.listen(process.env.PORT, () => {
    const {HOST, PORT} = process.env
    console.log(`A server is started on: ${HOST}:${PORT}`)
}) 

