const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db connection
var db = require('./db/connection')

//require routes
app.use('/', require('./routes'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))