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

router.post('/', (req, res) => {
    const action = req.body

    if(!action.project_id || !action.description || !action.notes) {
        res
        .status(403)
        .json({message: "You need to fill out all three of the fields ('project_id', 'description', and 'notes')."})
    } else {
        actions
        .insert(action)
        .then(newAction => {
            res
            .status(201)
            .json(newAction)
        })
        .catch(error => {
            console.log(error)
            res
            .status(500)
            .json({message: "There was an error while saving your Action to the database"})
        })
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const action = req.body

    if(!action.project_id || !action.description || !action.notes) {
        res
        .status(403)
        .json({message: "You need to fill out all three of the fields ('project_id', 'description', and 'notes')."})
    } else {
        actions
        .update(id, action)
        .then(updated => {
            if(!updated) {
                res
                .status(404)
                .json({message: `Couldn't find an Action with an ID of ${id}`})
            } else {
                res
                .status(200)
                .json({message: "You Succesfully updated your Action."})
            }
        })
        .catch(error => {
            console.log(error)
            res
            .status(500)
            .json({message: "Action information could not be modified."})
        })
    }
})



module.exports = router