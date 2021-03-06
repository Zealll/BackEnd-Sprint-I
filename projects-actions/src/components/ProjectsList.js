import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { apiUri } from '../GlobalVariables.js'


class ProjectsList extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [],
            error: ''
        }
    }

    componentDidMount() {
        axios
        .get(`${apiUri}/api/projects`)
        .then(res => this.setState({projects: res.data}))
        .catch(err => this.setState({error: err}))
    }


    render() {
        return(
            <div>
                {this.state.projects.map(projects => (
                <div className='list' key={projects.id}>
                    <h3>{projects.name}</h3>
                    <h4>{projects.description}</h4>
                    <Link to={`/projects/${projects.id}`}><button>View</button></Link>
                </div>))}
            </div>
        )
    }

}



export default ProjectsList