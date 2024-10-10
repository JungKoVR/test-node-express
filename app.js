const express = require('express')
const bodyParser = require('body-parser')

//specific port
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (req, res){
   console.log(req.body);
   res.send('OK');
})

app.listen(port)
console.log("Server started on port " + port)