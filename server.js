const express = require('express');
const app = express();
const connectToDB = require('./config/mongoConnection');

// Connect to Mongo DB
connectToDB();

app.get('/', (request, response) => response.send('Test API ...'));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
