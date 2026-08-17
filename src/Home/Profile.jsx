import { useState } from "react"
import { ArrowUpRight, Download, Copy, Check } from "lucide-react"
import "./Profile.css"

const PHONE_DISPLAY = "231-780-8624"
const PHONE_RAW = "2317808624"
const EMAIL = "benarteaga1@gmail.com"

function Profile(props) {
    const [copiedField, setCopiedField] = useState(null)

    function handleCopy(value, field) {
        navigator.clipboard.writeText(value)
        setCopiedField(field)
        setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 1500)
    }

    return (
        <div className="profile-sidebar">
            <img className="profile-avatar" src="/home/Headshot.jpg" alt="Ben Arteaga" />
            <div className="profile-name">Ben Arteaga</div>
            <div className="profile-title">UX Designer</div>
            <div className="profile-bio">
                Hi, I&rsquo;m Ben! Since graduating college in 2022 (Go Blue), I&rsquo;ve been creating designs across the <span className="profile-bio-highlight">Healthcare</span> and <span className="profile-bio-highlight">Fintech</span> spaces. I love the challenge of creating an experience that&rsquo;s both <span className="profile-bio-highlight">intuitive</span> to learn and <span className="profile-bio-highlight">efficient</span> to use once you learn it.
            </div>

            <div className="profile-contact">
                <div className="profile-contact-label">More Info</div>
                <a
                    className="profile-contact-row"
                    href="https://www.linkedin.com/in/ben-arteaga-336393190/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="profile-contact-text">LinkedIn</span>
                    <span className="profile-contact-icon" aria-hidden="true">
                        <ArrowUpRight size={18} />
                    </span>
                </a>
                <a className="profile-contact-row" href="/Ben_Arteaga_Resume.pdf" download>
                    <span className="profile-contact-text">Resume</span>
                    <span className="profile-contact-icon" aria-hidden="true">
                        <Download size={18} />
                    </span>
                </a>
            </div>

            <div className="profile-contact">
                <div className="profile-contact-label">Contact Me</div>
                <button
                    type="button"
                    className="profile-contact-row"
                    onClick={() => handleCopy(PHONE_RAW, "phone")}
                    aria-label="Copy phone number to clipboard"
                >
                    <span className="profile-contact-text">
                        {copiedField === "phone" ? "Copied!" : PHONE_DISPLAY}
                    </span>
                    <span className="profile-contact-icon" aria-hidden="true">
                        {copiedField === "phone" ? <Check size={18} /> : <Copy size={18} />}
                    </span>
                </button>
                <button
                    type="button"
                    className="profile-contact-row"
                    onClick={() => handleCopy(EMAIL, "email")}
                    aria-label="Copy email address to clipboard"
                >
                    <span className="profile-contact-text">
                        {copiedField === "email" ? "Copied!" : EMAIL}
                    </span>
                    <span className="profile-contact-icon" aria-hidden="true">
                        {copiedField === "email" ? <Check size={18} /> : <Copy size={18} />}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Profile
