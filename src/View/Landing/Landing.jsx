import React from 'react'
import data from "../../data (1).json"
import "./Landing.css"
import Attendance from '../../Components/Attendance/Attendance'
const Landing = () => {

  return (
    <div className="landing-main">
        <div className="landing-heading">
        <h1>Hello! {data[' NAME ']}</h1>
        <Attendance/>
        </div>
    </div>
  )
}

export default Landing
