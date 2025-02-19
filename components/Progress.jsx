
import React from 'react'

const Progress = ({percentage,title ,w}) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = Number(circumference - (percentage / 100) * circumference);
  return (
    <div className="flex flex-col items-center text-center gap-4 h-64">
    <svg width="151" height="151" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#951B46"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress Circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#951B46"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      {/* Percentage Text */}
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20px" fill="white">
        {percentage}{percentage === Number(percentage) ? "%" : ""}
      </text>
    </svg>
    <h1 className={`text-white text-3xl ${w}`}>{title}</h1>
      
    </div>
  )
}

export default Progress
