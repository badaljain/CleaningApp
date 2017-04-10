import express from 'express';
import bodyParser from 'body-parser'

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json, used to parse the body sent in the post request
app.use(bodyParser.json())
app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);
