import { useEffect, useRef, useState } from "react"
import { RefreshCw, History, X } from "lucide-react"
import AusRunView from "./AusRunView"
import AusResultView from "./AusResultView"
import AusHistoryView from "./AusHistoryView"
import "./AusPopover.css"

const RUN_DURATION_MS = 1800

function AusPopover(props) {
    const { onClose } = props
    const panelRef = useRef(null)

    const [view, setView] = useState("run")
    const [method, setMethod] = useState("DU")
    const [creditMode, setCreditMode] = useState("existing")
    const [agency, setAgency] = useState("")
    const [freOfferingId, setFreOfferingId] = useState("")
    const [lpaBranch, setLpaBranch] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [useBrokerCredentials, setUseBrokerCredentials] = useState(false)
    const [creditRef, setCreditRef] = useState("5004469")

    const locked = view === "loading"

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape" && !locked) onClose()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [locked, onClose])

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "" }
    }, [])

    function runAus() {
        setView("loading")
        if (!username) setUsername("uwmtester")
        if (!password) setPassword("••••")
        setUseBrokerCredentials(true)
        if (!agency) setAgency("Test Credit Agency (200)")
        window.setTimeout(() => setView("result"), RUN_DURATION_MS)
    }

    function goToNav(target) {
        if (locked) return
        setView(target)
    }

    return (
        <div
            className="ausOverlay"
            onMouseDown={(e) => { if (e.target === e.currentTarget && !locked) onClose() }}
        >
            <div
                className={`ausPanel${view === "historyFull" ? " wide" : ""}`}
                ref={panelRef}
                role="dialog"
                aria-label="Run AUS"
            >
                {view !== "historyFull" && (
                    <>
                        <div className="ausRail">
                            <div className="ausRailLabel">AUS</div>
                            <button
                                type="button"
                                className={`ausRailItem${view === "run" || view === "loading" || view === "result" ? " active" : ""}`}
                                onClick={() => goToNav("run")}
                                disabled={locked}
                            >
                                <RefreshCw size={20} strokeWidth={2} />
                                <span>Run AUS</span>
                            </button>
                            <button
                                type="button"
                                className={`ausRailItem${view === "history" ? " active" : ""}`}
                                onClick={() => goToNav("history")}
                                disabled={locked}
                            >
                                <History size={20} strokeWidth={2} />
                                <span>History</span>
                            </button>
                        </div>

                        <div className="ausDivider" />
                    </>
                )}

                <div className="ausContent">
                    <button
                        type="button"
                        className="ausClose"
                        onClick={() => !locked && onClose()}
                        aria-label="Close"
                        disabled={locked}
                    >
                        <X size={22} strokeWidth={2} />
                    </button>

                    {(view === "run" || view === "loading") && (
                        <AusRunView
                            loading={view === "loading"}
                            method={method}
                            setMethod={setMethod}
                            creditMode={creditMode}
                            setCreditMode={setCreditMode}
                            agency={agency}
                            setAgency={setAgency}
                            freOfferingId={freOfferingId}
                            setFreOfferingId={setFreOfferingId}
                            lpaBranch={lpaBranch}
                            setLpaBranch={setLpaBranch}
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            useBrokerCredentials={useBrokerCredentials}
                            setUseBrokerCredentials={setUseBrokerCredentials}
                            creditRef={creditRef}
                            setCreditRef={setCreditRef}
                            onRun={runAus}
                        />
                    )}

                    {view === "result" && (
                        <AusResultView method={method} onBack={() => setView("run")} />
                    )}

                    {(view === "history" || view === "historyFull") && (
                        <AusHistoryView
                            expanded={view === "historyFull"}
                            onExpand={() => setView("historyFull")}
                            onCollapse={() => setView("history")}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AusPopover
