import { ArrowLeft, AlertCircle, Landmark, CreditCard } from "lucide-react"

function AusResultView(props) {
    const { method, onBack } = props

    return (
        <div className="resultView">
            <button type="button" className="resultBackRow" onClick={onBack}>
                <ArrowLeft size={18} strokeWidth={2.5} />
                Run AUS
            </button>

            <div className="resultCard">
                <div className="resultHeading">{method} Run Complete</div>
                <div className="resultDate">08/10/2026</div>
                <div className="resultTime">01:23 PM</div>

                <div className="resultBanner">
                    <AlertCircle size={18} strokeWidth={2} />
                    Process Data Failed
                </div>

                <div className="resultButtonRow">
                    <button type="button" className="resultBtn primary">
                        <Landmark size={16} strokeWidth={2} />
                        DU Findings
                    </button>
                    <button type="button" className="resultBtn">
                        <CreditCard size={16} strokeWidth={2} />
                        Credit Report
                    </button>
                </div>
            </div>

            <div className="resultCard">
                <div className="resultRefTitle">For reference</div>
                <div className="resultStatRow">
                    <div className="resultStat">
                        <div className="resultStatLabel">DTI</div>
                        <div className="resultStatValue">0.01</div>
                    </div>
                    <div className="resultStat">
                        <div className="resultStatLabel">HTI</div>
                        <div className="resultStatValue">0</div>
                    </div>
                    <div className="resultStat">
                        <div className="resultStatLabel">LTV</div>
                        <div className="resultStatValue">75</div>
                    </div>
                    <div className="resultStat">
                        <div className="resultStatLabel">Credit Score</div>
                        <div className="resultStatValue">710</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AusResultView
