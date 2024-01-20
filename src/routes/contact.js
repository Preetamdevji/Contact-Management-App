const express = require("express")
const router = express.Router();

/**
 * @route GET /api/v1/contact
 * @desc Get all contact
 * @access private
 */

router.get('/', (req,resp)=>{
    try {
        resp.status(200).send({message: "get all contact"});
    } catch (error) {
        throw new Error(error.message)
    }
});

/**
 * @route Post /api/v1/contact
 * @desc create a new contact
 * @access private
 */

router.post('/', (req,resp)=>{
    try {
        resp.status(200).send({message: "create new a contact"});
    } catch (error) {
        throw new Error(error.message)
    }
})


/**
 * @route put /api/v1/contact
 * @desc update contact by id
 * @access private
 */

router.put('/:id',(req,resp)=>{
    try {
        resp.status(200).send({message: "update contact"})
    } catch (error) {
        throw new Error(error.message)
    }
})

/**
 * @route put /api/v1/contact
 * @desc delete contact by id
 * @access private
 */

router.delete('/:id',(req,resp)=>{
    try {
        resp.status(200).send({message: "delete contact"})
    } catch (error) {
        throw new Error(error.message)
    }
});

module.exports = router;