const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.listen(3000, ()=>{
  console.log('Server started at port 3000...');
});