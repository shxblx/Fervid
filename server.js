const express = require('express');

const app = express();


app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));