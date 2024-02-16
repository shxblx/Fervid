const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/userRouter');
app.use('/', userRouter);

const PORT =  3030;

app.listen(PORT, () => {
    console.log(`Server started running on http://localhost:${PORT}`);
});