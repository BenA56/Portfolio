import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { CASE_STUDIES } from "./CaseStudyList"
import "./CaseStudySwitcher.css"

function CaseStudySwitcher(props) {
    const { current } = props
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null)

    const currentTitle = CASE_STUDIES.find((cs) => cs.key === current)?.title

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
        <div className="caseStudySwitcher" ref={wrapperRef}>
            <button type="button" className="caseStudySwitcherButton" onClick={() => setOpen((o) => !o)}>
                <span className="caseStudySwitcherTitle button">{currentTitle}</span>
                <img
                    src="/utility/previous.png"
                    alt="chevron"
                    width="14px"
                    height="auto"
                    className={`caseStudySwitcherChevron${open ? " open" : ""}`}
                />
            </button>
            {open ?
                <div className="caseStudySwitcherPanel">
                    {CASE_STUDIES.map((cs) =>
                        cs.key === current ?
                            <div key={cs.key} className="caseStudySwitcherLink caseStudySwitcherLink--current" aria-current="true">
                                <span>{cs.title}</span>
                                <Check size={16} className="caseStudySwitcherCheck" />
                            </div>
                        :
                            <Link
                                key={cs.key}
                                className="caseStudySwitcherLink"
                                to={`/${cs.key}`}
                                onClick={() => setOpen(false)}
                            >
                                {cs.title}
                            </Link>
                    )}
                </div>
            : null}
        </div>
    )
}

export default CaseStudySwitcher
