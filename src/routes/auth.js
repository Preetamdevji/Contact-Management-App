const express = require('express');
const router = express.Router();

/**
 * @route GET /api/v1/auth
 * @desc Get logged in data
 * @access private
 */

router.get('/', (req,resp)=>{
    try {
        resp.status(200).send({message: "Get logged in users"});
    } catch (error) {
        throw new Error(error.message);
    }
});

/**
 * @route POST /api/v1/auth
 * @desc login user
 * @access public
 */

router.post('/',(req,resp)=>{
    try {
        resp.status(200).send({message: "login user"})
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = router;

