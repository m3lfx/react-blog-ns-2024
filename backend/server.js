const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const postRoutes = require('./routes/post');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', postRoutes);

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
