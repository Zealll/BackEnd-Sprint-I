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
       if (!project) {
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

router.get('/:id/actions', (req, res) => {
    const id = req.params.id

    projects
    .getProjectActions(id)
    .then(actions => {
        if(actions.length === 0) {
            res
            .status(404)
            .json({message: `Project with the specified ID of ${id} does not exist.`})
        } else {
            res.json(actions)
        }
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Action(s) regarding this Project could not be retrieved."})
    })
})

router.post('/', (req, res) => {
    const project = req.body

    if(!project.name || !project.description) {
        res
        .status(403)
        .json({message: "You need to fill out both fields ('name' and 'description')."})
    } else {
        projects
        .insert(project)
        .then(newProject => {
            res
            .status(201)
            .json(newProject)
        })
        .catch(error => {
            console.log(error)
            res
            .status(500)
            .json({message: "There was an error while saving your Project to the database"})
        })
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const project = req.body

    if(!project.name || !project.description) {
        res
        .status(403)
        .json({message: "You need to fill out both fields ('name' and 'description')."})
    } else {
        projects
        .update(id, project)
        .then(updated => {
            if(!updated) {
                res
                .status(404)
                .json({updated})
            } else {
                res
                .status(202)
                .json({message: "You succesfully updated your project."})
            }
        })
        .catch(error => {
            console.log(error)
            res
            .status(500)
            .json({message: "Project information could not be modified."})
        })
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    projects
    .remove(id)
    .then(deleted => {
        if(!deleted) {
            res
            .status(404)
            .json({message: `Project with an ID of ${id} couldn't be found.`})
        } else {
            res
            .status(202)
            .json({message: `You successfully deleted ${deleted} item(s)!`})
        }
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Specified Project couldn't be deleted."})
    })
})



module.exports = router