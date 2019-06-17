const express = require('express');

const server = express();

// your code here

server.get('/', (req, res) => {
    res.send(`
    <h2>Server is working!</h2>
    `)
})

const accounts = require('./data/accounts-model.js');

//////////////////// CRUD Endpoints ////////////////////

// CREATE - add a new item
server.post('/', (req, res) => {

})

// READ - send a list back of all items
server.get('/', (req, res) => {
    accounts.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ error: 'The list of accounts could not be retrieved.' })
        })
})

// UPDATE - update an item
server.put('/', (req, res) => {

})

// DELETE/DESTROY - remove an item
server.delete('/', (req, res) => {

})


module.exports = server;