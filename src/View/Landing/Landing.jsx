import React from 'react'
import data from "../../data (1).json"
import "./Landing.css"
import Attendance from '../../Components/Attendance/Attendance'
import Homework from '../../Components/Homework/Homework'
import Analytics from '../../Components/Anaylitics/Analytics'
const Landing = () => {

  return (
    <div className="landing-main">
        <div className="landing-heading">
        <h1>Hello! {data[' NAME ']}</h1>
        <Attendance/>
        <div className="homework-behaviour">
            <Homework/>
            <Analytics/>
        </div>
        </div>
    </div>
  )
}

export default Landing
