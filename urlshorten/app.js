const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()


// accepting json data into our API

app.use(express.json({
    extended: false
}))



app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})