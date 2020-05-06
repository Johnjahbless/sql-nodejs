const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../config/config');

const router = express.Router();


router.get('/first', async(req, res) => {
    const users = fs.readFileSync(path.join(__dirname, '../sql/users.sql')).toString();
    const query = await db.query(users,  (err, result) => {
        if (err){
             throw err;
        }else{
            res.send("Query run successfully");
        }
    
        });
})





module.exports = router;