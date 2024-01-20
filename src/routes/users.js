const express = require("express");
const router = express.Router();

/**
 * @route POST /api/v1/users
 * @desc create a new users
 * @access public
 */ 

router.post('/', (req,resp)=>{
    try {
        resp.status(200).send({message: "create a new users"});
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = router;