const express = require('express');

const server = express();

// your code here

server.get('/', (req, res) => {
    res.send(`
    <h2>Server is working!</h2>
    `)
})

server.use(express.json());

const accounts = require('./data/accounts-model.js');

//////////////////// CRUD Endpoints ////////////////////

// CREATE - add a new item
server.post('/newaccount/', (req, res) => {
    const newAccount = { name: req.body.name, budget: req.body.budget };

    accounts.add(newAccount)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(error => {
        res.status(500).json({ error: 'The new account could not be added.' })
    })
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
server.put('/:id/', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    accounts.update(id, changes)
    .then(data => {
        if(data) {
            res.json(data);
        } else {
            res.status(404).json({ error: 'Incorrect account ID.' })
        }
    })
    .catch(error => {
        res.status(500).send(code).json({ error: 'The account data could not be updated.' })
    })

})

// DELETE/DESTROY - remove an item
server.delete('/:id/', (req, res) => {
    const { id } = req.params;

    accounts.remove(id)
    .then(id => {
        if (id) {
            res.json(id);
        } else {
            res.status(404).json({ message: 'The account with the specified ID does not exist.' })
        }
    })
    .catch(error => {
        res.status(500).json({ error: 'The account could not be removed.' })
    })
})

// READ - find account by ID
server.get('/:id/', (req, res) => {

})

module.exports = server;