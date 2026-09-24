import { useState } from "react"
import { Maximize2, CheckCircle2, AlertCircle, Landmark, CreditCard, ArrowLeft } from "lucide-react"

const COMPACT_ROWS = [
    { date: "01/22/2026", time: "04:16 PM", by: "erucinski", ok: true },
    { date: "01/22/2026", time: "03:44 PM", by: "erucinski", ok: true },
]

const FULL_ROWS = [
    { date: "08/10/2026", time: "01:27 PM", by: "barteaga2", ok: false },
    { date: "08/10/2026", time: "01:27 PM", by: "barteaga2", ok: false },
    { date: "08/10/2026", time: "01:26 PM", by: "barteaga2", ok: false },
    { date: "08/10/2026", time: "01:23 PM", by: "barteaga2", ok: false },
    { date: "01/22/2026", time: "04:16 PM", by: "erucinski", ok: true },
    { date: "01/22/2026", time: "03:44 PM", by: "erucinski", ok: true },
]

function Recommendation({ ok }) {
    return ok ? (
        <span className="histRec ok">
            <CheckCircle2 size={17} strokeWidth={2} />
            Approve/Eligible
        </span>
    ) : (
        <span className="histRec fail">
            <AlertCircle size={17} strokeWidth={2} />
            Process Data Failed
        </span>
    )
}

function AusHistoryView(props) {
    const { expanded, onExpand, onCollapse } = props
    const [method, setMethod] = useState("DU")
    const rows = expanded ? FULL_ROWS : COMPACT_ROWS

    return (
        <div className={`historyView${expanded ? " expanded" : ""}`}>
            <div className="historyHeader">
                {expanded && (
                    <button type="button" className="historyCollapse" onClick={onCollapse}>
                        <ArrowLeft size={16} strokeWidth={2.5} />
                    </button>
                )}
                <h2 className="historyTitle">History</h2>
                <div className="segmented small">
                    <button type="button" className={method === "DU" ? "active" : ""} onClick={() => setMethod("DU")}>DU</button>
                    <button type="button" className={method === "LPA" ? "active" : ""} onClick={() => setMethod("LPA")}>LPA</button>
                </div>
                {!expanded && <span className="historySub">Desktop Underwriter</span>}
                {!expanded && (
                    <button type="button" className="historyFullBtn" onClick={onExpand}>
                        Full Screen
                        <Maximize2 size={15} strokeWidth={2} />
                    </button>
                )}
            </div>

            <div className="historyTable">
                <div className="historyRow historyRowHead">
                    <span>Date</span>
                    <span>Time</span>
                    <span>Ran by</span>
                    <span>Recommendation</span>
                    <span>DU Findings / Credit</span>
                </div>
                {rows.map((row, i) => (
                    <div className="historyRow" key={i}>
                        <span>{row.date}</span>
                        <span>{row.time}</span>
                        <span><span className="historyByChip">{row.by}</span></span>
                        <span><Recommendation ok={row.ok} /></span>
                        <span className="historyActions">
                            <button type="button" className="histActionBtn">
                                <Landmark size={15} strokeWidth={2} />
                                DU
                            </button>
                            <button type="button" className={`histActionBtn icon${row.ok ? " ok" : ""}`} disabled={!row.ok}>
                                <CreditCard size={15} strokeWidth={2} />
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AusHistoryView
