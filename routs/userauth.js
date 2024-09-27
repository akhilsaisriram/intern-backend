const express = require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');

const User=require('../models/users');
const jwtAuth =require('../middleware/jwt');

const Book = require('../models/Book');

const { books,users } = require('../data');

// Insert books into the database
router.get('/insertBooks', async (req, res) => {
    try {
        await Book.insertMany(books);
        res.status(200).send('Books inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting books');
    }
});
router.post('/send-data', async (req, res) => {
    try {
        const { name, email } = req.body;

        // Insert the user data into the Users collection
        const newUser = new User({
            name,
            email
        });
        await newUser.save();

        res.status(200).json({ message: 'User data inserted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error inserting user data' });
    }
});
router.get('/insertuser', async (req, res) => {
    try {
        await User.insertMany(users);
        res.status(200).send('users inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting books');
    }
});

module.exports=router