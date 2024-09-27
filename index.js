const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAuthRoutes = require('./routs/userauth'); // Adjust the path as needed
const Book = require('./models/Book');
const User=require('./models/users');
const Transaction=require('./models/Transaction')
const app = express();
const transactionsRouter = require('./routs/transactions'); // Import the transactions router
const bookserch =require('./routs/bookserch')
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({limit: "30mb",extended:true}));
app.use(bodyParser.json());
// Sample route
require('dotenv').config(); // Load environment variables from .env file

const http = require('http');
const users = require('./models/users');
const server = http.createServer(app)
const PORT = process.env.PORT || 5000; // Use the port from the environment variable or default to 5000

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT} and connected to MongoDB`);
        });
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    console.log("jj");
    
    res.send('Hello, World!');
});

  


app.use('/bookserch', bookserch);

app.use('/transactions', transactionsRouter);

app.use('/api', userAuthRoutes);

