import { useState, useEffect } from "react"
import "./Countdown.css"

const TARGET_DATE = new Date("2026-08-24T00:00:00")

function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

function Countdown(props) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="countdownLayout">
            <div className="countdownItem">
                <div className="countdownNumber">{timeLeft.days}</div>
                <div className="l1">Days</div>
            </div>
            <div className="countdownColon">:</div>
            <div className="countdownItem">
                <div className="countdownNumber">{String(timeLeft.hours).padStart(2, "0")}</div>
                <div className="l1">Hours</div>
            </div>
            <div className="countdownColon">:</div>
            <div className="countdownItem">
                <div className="countdownNumber">{String(timeLeft.minutes).padStart(2, "0")}</div>
                <div className="l1">Min</div>
            </div>
            <div className="countdownColon">:</div>
            <div className="countdownItem">
                <div className="countdownNumber">{String(timeLeft.seconds).padStart(2, "0")}</div>
                <div className="l1">Sec</div>
            </div>
        </div>
    )
}

export default Countdown
