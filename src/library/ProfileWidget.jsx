import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Download, Copy, Check } from "lucide-react"
import "./ProfileWidget.css"

const PHONE_DISPLAY = "231-780-8624"
const PHONE_RAW = "2317808624"
const EMAIL = "benarteaga1@gmail.com"

function ProfileWidget(props) {
    const [open, setOpen] = useState(false)
    const [copiedField, setCopiedField] = useState(null)
    const wrapperRef = useRef(null)

    function handleCopy(value, field) {
        navigator.clipboard.writeText(value)
        setCopiedField(field)
        setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 1500)
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <div className="profileWidget" ref={wrapperRef}>
            <button type="button" className="profileWidgetButton" onClick={() => setOpen((o) => !o)} aria-label="Contact info">
                <img className="profileWidgetHeadshot" src="/home/Headshot.jpg" alt="Ben Arteaga" />
            </button>
            {open ?
                <div className="profileWidgetPanel">
                    <div className="profileWidgetSection">
                        <div className="profileWidgetLabel">More Info</div>
                        <a
                            className="profileWidgetRow"
                            href="https://www.linkedin.com/in/ben-arteaga-336393190/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="profileWidgetText">LinkedIn</span>
                            <span className="profileWidgetIcon" aria-hidden="true">
                                <ArrowUpRight size={18} />
                            </span>
                        </a>
                        <a className="profileWidgetRow" href="/Ben_Arteaga_Resume.pdf" download>
                            <span className="profileWidgetText">Resume</span>
                            <span className="profileWidgetIcon" aria-hidden="true">
                                <Download size={18} />
                            </span>
                        </a>
                    </div>

                    <div className="profileWidgetSection">
                        <div className="profileWidgetLabel">Contact Me</div>
                        <button
                            type="button"
                            className="profileWidgetRow"
                            onClick={() => handleCopy(PHONE_RAW, "phone")}
                            aria-label="Copy phone number to clipboard"
                        >
                            <span className="profileWidgetText">
                                {copiedField === "phone" ? "Copied!" : PHONE_DISPLAY}
                            </span>
                            <span className="profileWidgetIcon" aria-hidden="true">
                                {copiedField === "phone" ? <Check size={18} /> : <Copy size={18} />}
                            </span>
                        </button>
                        <button
                            type="button"
                            className="profileWidgetRow"
                            onClick={() => handleCopy(EMAIL, "email")}
                            aria-label="Copy email address to clipboard"
                        >
                            <span className="profileWidgetText">
                                {copiedField === "email" ? "Copied!" : EMAIL}
                            </span>
                            <span className="profileWidgetIcon" aria-hidden="true">
                                {copiedField === "email" ? <Check size={18} /> : <Copy size={18} />}
                            </span>
                        </button>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default ProfileWidget
