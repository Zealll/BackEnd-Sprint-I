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

router.get('/:id', (req, res) => {
    const id = req.params.id

    actions
    .get(id)
    .then(action => {
        if(action.length === 0) {
            res
            .status(404)
            .json({message: `Action with the specified ID of ${id} does not exist.`})
        } else {
            res.json(action)
        }
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Something went wrong with the server while retrieving your Action."})
    })
})



module.exports = router