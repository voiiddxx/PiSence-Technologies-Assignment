import React from 'react'
import "./Attendance.css"
import data from "../../data (1).json"
const Attendance = () => {
    console.log(data);
    
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
                    <h3>Monday </h3>
                    <p>{data[' ATTENDANCE'][' monday'].date} </p>
                    {
                        data[' ATTENDANCE'][' monday'].an==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                    {
                        data[' ATTENDANCE'][' monday'].fn==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                 
                </div>
            <div className="right-box">
                    <h3>Tuesday</h3>
                    <p>{data[' ATTENDANCE'].tuesday.date}</p>
                    {
                        data[' ATTENDANCE'].tuesday.fn==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                    {
                        data[' ATTENDANCE'].tuesday.an==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                </div>
            <div className="right-box">
                    <h3>Wednesday</h3>
                    <p>{data[' ATTENDANCE'].wednesday.date}</p>

                    {
                        data[' ATTENDANCE'].wednesday.fn==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                   
                    {
                        data[' ATTENDANCE'].wednesday.an==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                   
                </div>
            <div className="right-box">
                    <h3>Thrusday</h3>
                    <p>{data[' ATTENDANCE'].thursday.date}</p>

                    {
                        data[' ATTENDANCE'].thursday.fn==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                   
                    {
                        data[' ATTENDANCE'].thursday.an==="present" ? <div className="green"></div> : <div className="red"></div>
                    }
                   
                </div>
            <div className="right-box">
                    <h3>friday</h3>
                    <p>{data[' ATTENDANCE'].friday.date}</p>

{
    data[' ATTENDANCE'].friday.fn==="present" ? <div className="green"></div> : <div className="red"></div>
}

{
    data[' ATTENDANCE'].friday.an==="present" ? <div className="green"></div> : <div className="red"></div>
}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendance
