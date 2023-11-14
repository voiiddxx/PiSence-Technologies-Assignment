import React from 'react'
import "./Analytics.css"
import data from "../../data (1).json"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Analytics = () => {
    console.log(data['Behavioral Analytics'].length);
    let good = 0;
    for( let i =0;i<data['Behavioral Analytics'].length;i++){
        if(data['Behavioral Analytics'][i]==="good"){
            good++;
        }
    }
    let bad = data['Behavioral Analytics'].length - good;

    const datanow = [
        { name: 'Good', value: good },
        { name: 'Bad', value: bad },
      ];
      
const COLORS = ['#008000', '#ff0000'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
   <div className="anay-main">
    <h1>Behavioral Analytics</h1>
    <div className="chart">
        
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={datanow}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {datanow.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="detail">
        <div className="good-box">
            <div className="good"></div>
            <p>Good</p>
        </div>
        <div className="bad-box">
            <div className="bad"></div>
            <p>Bad</p>
        </div>
    </div>
   </div>
  )
}


export default Analytics
