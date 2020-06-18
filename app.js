const express = require('express');
const app = express();

const productRoutes = require('./producto');

app.use('/producto', productRoutes); 
module.exports = app;