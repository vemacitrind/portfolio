import React, { useEffect, useState } from 'react'
import './Taskbar.css'

const Taskbar = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    }

    return (
        <div className="taskbar">
            <div className="taskbar-left">
                <span className="taskbar-title"><img src='/assets/arch.png' alt='logo'/>Portfolio</span>
            </div>
            <div className="taskbar-right">
                <span className="cpu-usage">CPU 2.0%</span>
                <span className="time">{formatTime(time)}</span>
            </div>
        </div>
    )
}

export default Taskbar
