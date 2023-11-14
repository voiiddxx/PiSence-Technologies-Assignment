import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars, faUser} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="nav-inner">
        <FontAwesomeIcon icon={faBars} size='lg' color='black' />
        <FontAwesomeIcon icon={faUser} size='lg' color='black' />
        </div>
    </div>
    <Sidebar/>
    </>
    
  )
}

export default Navbar
