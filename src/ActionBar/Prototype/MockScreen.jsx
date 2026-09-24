import { useState } from "react"
import {
    FileText, CalendarDays, FolderCheck, MessagesSquare, MessageCircle,
    Users, FileBarChart2, Bot, AlertTriangle, Info, ChevronDown, ExternalLink, X, Check, Circle,
} from "lucide-react"
import LiveActionBar from "./LiveActionBar"
import AusPopover from "./AusPopover"
import "./MockScreen.css"

const SIDEBAR_ITEMS = [
    { icon: FileText, label: "1003 Information" },
    { icon: CalendarDays, label: "Date Tracking" },
    { icon: FolderCheck, label: "Document Associations", active: true },
    { icon: MessagesSquare, label: "KYL" },
    { icon: MessageCircle, label: "Comments" },
    { icon: Users, label: "Contacts" },
    { icon: FileBarChart2, label: "Loan Summary" },
    { icon: Bot, label: "ChatUWM" },
]

const TABS = [
    { label: "Classify", status: "done" },
    { label: "Borrower", status: "progress" },
    { label: "Liabilities", status: "progress" },
    { label: "Income", status: "count" },
    { label: "Property", status: "done" },
    { label: "Assets", status: "count" },
    { label: "Status & Review", status: "done" },
]

const DOC_ROWS = [
    { doc: "Schedule K-1 Form 1065", link: false, record: null },
    { doc: "Paystub", link: true, record: null },
    { doc: "Form 1065", link: true, record: "Employment Income, 1065" },
    { doc: "Form 1120", link: true, record: "Employment Income, 1120" },
    { doc: "Form 1120S", link: true, record: "Employment Income, 1120S" },
    { doc: "Schedule C - Form 1040", link: true, record: "Employment Income, Schedule C" },
    { doc: "Schedule C - Form 1040", link: true, record: "Employment Income, Schedule C Redux" },
    { doc: "Schedule C - Form 1040", link: false, record: "Not Applicable", noData: true },
]

function TabIcon({ status }) {
    if (status === "done") return <span className="mockTabIcon done"><Check size={11} strokeWidth={3} /></span>
    if (status === "count") return <span className="mockTabIcon count">1</span>
    return <span className="mockTabIcon progress"><Circle size={9} strokeWidth={3} fill="currentColor" /></span>
}

function MockScreen(props) {
    const [ausOpen, setAusOpen] = useState(false)

    return (
        <div className="mockScreen">
            <div className="mockSidebar">
                <div className="mockLogo">BOLT</div>
                <div className="mockSidebarItems">
                    {SIDEBAR_ITEMS.map((item) => (
                        <div key={item.label} className={`mockSidebarItem${item.active ? " active" : ""}`}>
                            <item.icon size={20} strokeWidth={1.8} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="mockSidebarItem incident">
                    <AlertTriangle size={20} strokeWidth={1.8} />
                    <span>BOLT Incident</span>
                </div>
            </div>

            <div className="mockMain">
                <div className="mockLoanHeader">
                    <div className="mockLoanId">1226051469</div>
                    <div className="mockLoanName">Alice Firstimer</div>
                    <div className="mockLoanStats">
                        <span><Info size={13} /> DTI <b>0%</b></span>
                        <span><Info size={13} /> LTV <b>75%</b></span>
                    </div>
                    <div className="mockLoanAddress">18 7th St, WATERFORD, MI, 48328</div>
                </div>

                <div className="mockTabs">
                    {TABS.map((tab) => (
                        <div key={tab.label} className={`mockTab${tab.label === "Classify" ? " selected" : ""}`}>
                            <TabIcon status={tab.status} />
                            {tab.label}
                        </div>
                    ))}
                    <div className="mockTabsRight">
                        Senior Underwriter View
                        <X size={16} strokeWidth={2} />
                    </div>
                </div>

                <div className="mockBody">
                    <h1 className="mockBodyTitle">Document Association(s)</h1>
                    <p className="mockBodyHint">Use the dropdowns to indicate document associations.</p>

                    <div className="mockSectionHeader">
                        <span className="mockSectionCheck"><Check size={13} strokeWidth={3} /></span>
                        Income - Completed
                        <ChevronDown size={18} strokeWidth={2} className="mockSectionChevron" />
                    </div>

                    <div className="mockTable">
                        <div className="mockTableHeadRow">
                            <span>Document Type</span>
                            <span>Associated Record(s)</span>
                        </div>
                        {DOC_ROWS.map((row, i) => (
                            <div className="mockTableRow" key={i}>
                                <span className="mockDocCell">
                                    {row.doc}
                                    {row.link && <ExternalLink size={13} strokeWidth={2} />}
                                </span>
                                <span className="mockRecordCell">
                                    {row.record ? (
                                        <span className={`mockChip${row.noData ? " muted" : ""}`}>
                                            {row.record}
                                            <X size={12} strokeWidth={2.5} />
                                        </span>
                                    ) : (
                                        <span className="mockSelectPlaceholder">
                                            Select
                                            <ChevronDown size={14} strokeWidth={2} />
                                        </span>
                                    )}
                                    {row.noData && <span className="mockNoData">No Data Available</span>}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <LiveActionBar onAusClick={() => setAusOpen((v) => !v)} ausOpen={ausOpen} />
                {ausOpen && <AusPopover onClose={() => setAusOpen(false)} />}
            </div>
        </div>
    )
}

export default MockScreen
