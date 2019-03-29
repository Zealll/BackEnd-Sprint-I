import React from 'react'
import axios from 'axios'
import { apiUri } from '../GlobalVariables'



class IndividualProject extends React.Component {
    constructor() {
        super()
        this.state = {
            project: [],
            error: ''
        }
    }


    componentDidMount() {
        axios
        .get(`${apiUri}/api/projects/${this.props.match.params.id}`)
        .then(res => this.setState({project: res.data}))
        .catch(err => this.setState({error: err}))
    }


    render(){
        return(
            <div>
                {this.state.project.name}
                {this.state.project.description}
            </div>
        )
    }
}


export default IndividualProject