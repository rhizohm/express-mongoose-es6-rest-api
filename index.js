const express = require('express')
var fs = require("fs");

fs.existsSync = fs.existsSync || require('path').existsSync;
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})