import { CheckCircle2, Landmark, CreditCard, ChevronDown, AlertTriangle, Loader2 } from "lucide-react"

function Segmented({ options, value, onChange, disabled, small }) {
    return (
        <div className={`segmented${small ? " small" : ""}`}>
            {options.map((opt) => (
                <button
                    key={opt.value}
                    type="button"
                    className={value === opt.value ? "active" : ""}
                    onClick={() => onChange(opt.value)}
                    disabled={disabled}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    )
}

function AusRunView(props) {
    const {
        loading, method, setMethod, creditMode, setCreditMode,
        agency, setAgency, freOfferingId, setFreOfferingId, lpaBranch, setLpaBranch,
        username, setUsername, password, setPassword,
        useBrokerCredentials, setUseBrokerCredentials,
        creditRef, setCreditRef, onRun,
    } = props

    const showLpaWarning = method === "LPA"

    return (
        <div className="runView">
            <h2 className="runTitle">Run AUS</h2>

            <div className="runBody">
                <div className="runLeftCol">
                    <div className="runSectionLabel">Previous Result</div>
                    <div className="runPrevResult">
                        <CheckCircle2 size={20} color="#38A169" strokeWidth={2} />
                        Approve/Eligible
                    </div>

                    <button type="button" className="runLink">
                        <Landmark size={18} strokeWidth={2} />
                        DU Findings
                    </button>
                    <button type="button" className="runLink">
                        <CreditCard size={18} strokeWidth={2} />
                        Credit Report
                    </button>

                    <div className="runInfoBlock">
                        <div className="runSectionLabel">Run Info</div>
                        <div className="runInfoMethod">DU</div>
                        <div className="runInfoSub">Desktop Underwriter</div>
                        <div className="runInfoDate">01/22/2026</div>
                        <div className="runInfoSub">04:16 PM</div>
                        <div className="runInfoUser">erucinski</div>
                    </div>
                </div>

                <div className="runColDivider" />

                <div className="runRightCol">
                    <div className="runToggleRow">
                        <Segmented
                            options={[
                                { value: "existing", label: "Use Existing Credit" },
                                { value: "reissue", label: "Re-Issue" },
                            ]}
                            value={creditMode}
                            onChange={setCreditMode}
                        />
                        <Segmented
                            options={[
                                { value: "DU", label: "DU" },
                                { value: "LPA", label: "LPA" },
                            ]}
                            value={method}
                            onChange={setMethod}
                            disabled={loading}
                            small
                        />
                    </div>

                    {showLpaWarning && (
                        <div className="runWarning">
                            <AlertTriangle size={16} strokeWidth={2} />
                            Last AUS run was DU
                        </div>
                    )}

                    <div className="runField">
                        <label>Agency</label>
                        <div className={`runSelect${loading ? " disabled" : ""}`}>
                            <select
                                value={agency}
                                onChange={(e) => setAgency(e.target.value)}
                                disabled={loading}
                            >
                                <option value="">Select one</option>
                                <option value="Test Credit Agency (200)">Test Credit Agency (200)</option>
                                <option value="Informative Research (100)">Informative Research (100)</option>
                                <option value="CBC Innovis (300)">CBC Innovis (300)</option>
                            </select>
                            <ChevronDown size={16} strokeWidth={2} className="runSelectChevron" />
                        </div>
                    </div>

                    {method === "LPA" && (
                        <div className="runFieldRow">
                            <div className="runField">
                                <label>FRE Offering ID</label>
                                <div className={`runSelect${loading ? " disabled" : ""}`}>
                                    <select
                                        value={freOfferingId}
                                        onChange={(e) => setFreOfferingId(e.target.value)}
                                        disabled={loading}
                                    >
                                        <option value="">(Detect Automatically)</option>
                                    </select>
                                    <ChevronDown size={16} strokeWidth={2} className="runSelectChevron" />
                                </div>
                            </div>
                            <div className="runField">
                                <label>LPA Branch #</label>
                                <input
                                    type="text"
                                    placeholder="Enter LPA Branch #"
                                    value={lpaBranch}
                                    onChange={(e) => setLpaBranch(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                    )}

                    {method === "DU" && (
                        <>
                            <div className="runGroupLabel">Credentials</div>
                            <div className="runFieldRow">
                                <div className="runField">
                                    <label>User Name</label>
                                    <div className="runInputWrap">
                                        <input
                                            type="text"
                                            placeholder="Enter User Name"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            disabled={loading}
                                        />
                                        {loading && <Loader2 size={16} className="runSpinner" />}
                                    </div>
                                </div>
                                <div className="runField">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                            </div>
                            <label className="runSwitchRow">
                                <span>Use Broker Credentials</span>
                                <span className={`runSwitch${useBrokerCredentials ? " on" : ""}${loading ? " disabled" : ""}`}>
                                    <input
                                        type="checkbox"
                                        checked={useBrokerCredentials}
                                        onChange={(e) => setUseBrokerCredentials(e.target.checked)}
                                        disabled={loading}
                                    />
                                    <span className="runSwitchKnob" />
                                </span>
                            </label>
                        </>
                    )}

                    <div className="runGroupLabel">Credit Ref Numbers</div>
                    <div className="runField">
                        <label>Alice Firstimer</label>
                        <input
                            type="text"
                            value={creditRef}
                            onChange={(e) => setCreditRef(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="button"
                        className="runSubmit"
                        onClick={onRun}
                        disabled={loading}
                    >
                        {loading ? `Running ${method} ...` : `Run ${method}`}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AusRunView
