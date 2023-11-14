import React from 'react'
import "./Sidebar.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-box">
            <div className="sidebar-menu">
                <div className="option">
                <FontAwesomeIcon icon={faBars} size='lg' color='black' />
                <p>Dashboard</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faBars} size='lg' color='black' />
                <p>Dashboard</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faBars} size='lg' color='black' />
                <p>Dashboard</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faBars} size='lg' color='black' />
                <p>Dashboard</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
