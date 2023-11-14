import React from 'react'
import "./Attendance.css"
import data from "../../data (1).json"
const Attendance = () => {
    console.log(data['Behavioral Analytics']);
  return (
    <div className="attendance-main">
        <p>A T T E N D A N C E</p>
        <div className="attendance-box">
            <div className="left">
                <p>FN</p>
                <p>AN</p>
            </div>
            <div className="right">
            <div className="right-box">
                    <h3>Sunday</h3>
                    <p>21/03/2025 </p>
                    <div className="green"></div>
                    <div className="red"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendance
