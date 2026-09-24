import { useState } from "react"
import { CheckCircle2, List, History, Clipboard, Folder } from "lucide-react"
import "./LiveActionBar.css"

function LiveActionBar(props) {
    const { onAusClick, ausOpen } = props
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className="liveActionBar">
            <button
                type="button"
                className={`labAus${ausOpen ? " open" : ""}`}
                onClick={onAusClick}
                aria-haspopup="dialog"
                aria-expanded={ausOpen}
            >
                <CheckCircle2 className="labAusBadge" size={16} strokeWidth={2.5} />
                AUS
            </button>

            <div className="labInert">
                <span className="labText">FG</span>

                <button type="button" className="labIconBtn" tabIndex={-1}>
                    <List size={18} strokeWidth={2} />
                </button>

                <span className="labText labCtc">
                    CTC
                    <History size={16} strokeWidth={2} />
                </span>

                <div className="labGroup">
                    <button type="button" className="labIconBtn light" tabIndex={-1}>
                        <Clipboard size={18} strokeWidth={2} />
                    </button>
                    <button type="button" className="labIconBtn light" tabIndex={-1}>
                        <Folder size={18} strokeWidth={2} />
                    </button>
                    <div
                        className="labContinueWrap"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        {showTooltip && (
                            <div className="labTooltip">
                                Continue
                                <span className="labTooltipShortcut">ALT + S</span>
                            </div>
                        )}
                        <button type="button" className="labContinue" tabIndex={-1}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveActionBar
