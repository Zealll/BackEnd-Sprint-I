import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/projects'><button>Projects</button></Link>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}


export default Nav