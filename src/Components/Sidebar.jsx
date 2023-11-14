import React from 'react'
import "./Sidebar.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars, faBolt, faBook, faCamera, faHome} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-box">
            <div className="sidebar-menu">
                <div className="option">
                <FontAwesomeIcon icon={faHome} size='lg' color='black' />
                <p>Dashboard</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faBolt} size='lg' color='black' />
                <p>Attendance</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faCamera} size='lg' color='black' />
                <p>Behaviour</p>
                </div>
                <div className="option">
                <FontAwesomeIcon icon={faBook} size='lg' color='black' />
                <p>Academic</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
