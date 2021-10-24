<<<<<<< Updated upstream
let mongoose = require ('mongoose');

//create a model class

let inventoryModel = mongoose.Schema(

    {
        item: String,
        qty: Number,
        tags: []
=======
/* Filename: server.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 23nd Oct 2021  */

let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
>>>>>>> Stashed changes
    },
    {
        collection: "inventory"
    }
);

<<<<<<< Updated upstream
module.exports = mongoose.model( 'Inventory', inventoryModel);
=======
module.exports = mongoose.model('Inventory', inventoryModel);
>>>>>>> Stashed changes
