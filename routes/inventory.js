/* Filename: inventory.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 2nd Oct 2021 */

var express = require('express');
var router = express.Router();
<<<<<<< Updated upstream
let mongoose = require ('mongoose');
/* GET users listing. */
//conntect to your model
let Inventory = require ('../models/inventory')
router.get('/', function(req, res, next) {

    Inventory.find(
        (err,inventoryList)=> {
        console.log(inventoryList);
         }
    )
        
});
=======

/* GET users listing. */
//conntect to your model
let inventoryController = require('../controller/inventory');

let Inventory = require ('../models/inventory')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}



router.get('/list', inventoryController.inventoryList);

// Routers for edit
router.get('/edit/:id', requireAuth, inventoryController.displayEditPage);
router.post('/edit/:id', requireAuth, inventoryController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, inventoryController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, inventoryController.displayAddPage);
router.post('/add', requireAuth, inventoryController.processAddPage);
>>>>>>> Stashed changes

module.exports = router;
