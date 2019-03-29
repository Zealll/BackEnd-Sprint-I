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



module.exports = router