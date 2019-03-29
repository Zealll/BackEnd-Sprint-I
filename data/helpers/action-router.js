const express = require('express')

const router = express.Router()

const actions = require('./actionModel.js')



router.get('/', (req, res) => {

    actions
    .get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Sorry something went wrong while getting actions."})
    })
})





module.exports = router