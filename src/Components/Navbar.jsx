import React, { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBars, faUser} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'

const Navbar = () => {

    const [sideBarisOpneorNot, setsideBarisOpneorNot] = useState(false);
  return (
    <>
    <div className="navbar">
        <div className="nav-inner">
        <FontAwesomeIcon className='button' onClick={()=>{
          if(sideBarisOpneorNot===true){
            setsideBarisOpneorNot(false);
          }else{
            setsideBarisOpneorNot(true);
          }
        }} icon={faBars} size='lg' color='black' />
        <FontAwesomeIcon className='button' icon={faUser} size='lg' color='black' />
        </div>
    </div>
    {
        sideBarisOpneorNot !== false ?  <Sidebar/> : <div></div>
    }
    </>
    
    
  )
}

export default Navbar
