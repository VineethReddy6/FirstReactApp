import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
// import styled from 'styled-components'
const Navlinks = {
    color: "black",
    textDecoration: "none",
    marginRight: "10px"
}
export default class Navbar extends Component {
    render() {
        return (
            <header className='navbar'>
                <div className='navbar__title navbar__item'>CRUD</div>
                <Link to="/home" style={Navlinks}>Home</Link>
                <Link to="/GetStudents" style={Navlinks}>ViewStudents</Link>
                <Link to="/AddStudent" style={Navlinks}>Addstudents</Link>
                <Link to="/UpdateStudent" style={Navlinks}>UpdateStudent</Link>
            </header>
        )
    }
}

