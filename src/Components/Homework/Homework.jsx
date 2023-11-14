import React from 'react'
import "./Homework.css"
import data from "../../data (1).json"
const Homework = () => {
  return (
    <div className="homeword-main">
        <p>Homework</p>

        <div className="work">
        {
            data.homework.map((curr)=>{
                return <p>{curr}</p>
            })
        }
        </div>
    </div>
  )
}

export default Homework
