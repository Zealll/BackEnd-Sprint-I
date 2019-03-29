const express = require('express')

const router = express.Router()

const projects = require('./projectModel.js')


router.get('/', (req, res) => {

    projects
    .get()
    .then(projects => {
        res
        .status(200)
        .json(projects)
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .then({message: "Sorry something went wrong while getting Projects."})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    projects
    .get(id)
    .then(project => {
        if(project.length === 0) {
            res
            .status(404)
            .json({message: `Project with the specified ID of ${id} does not exist.`})
        } else {
            res.json(project)
        }
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Something went wrong with the server while retrieving your Project."})
    })
})



module.exports = router