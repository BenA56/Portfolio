import "../library/Sections.css";
import "./ReportRedesign.css";
import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Stakeholders(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Stakeholders"
                        title="Uniting a multi-disciplinary team"
                    />
                    <div className="content">While we had help from a couple of interns and contractors along the way, the core team consisted of four people: CEO, doctor, marketer, and myself. With limited resources, I needed to create synergy between myself and my team so that we could become greater than the sum of our parts.</div>
                </div>

                {/* CEO */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">CEO/Founder ~ Beltran Figuera </div>
                        <BulletPoint
                            image="/utility/cap.png"
                            text="Back-End Developer, Business Ops, Strategy, Product Manager"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I presented designs at our daily meeting to get feedback on how it fits the business vision and how feasible it is on the back end"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I advocated for our users in import business decisions"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I gave him back-end requirements for each feature during the development process"
                        />
                    </div>
                    <div className="imageLayout">
                        <img className="imgStyle" src="/report/Figma-Board.png" alt="Figma" width="100%" height="auto" />
                        <div className="imgLabel">Ideas in Figma to discuss at our daily meeting</div>
                    </div>
                </div>

                {/* Doctor */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">Oncologist ~ Dr. Jennifer Griggs  </div>
                        <BulletPoint
                            image="/utility/cap.png"
                            text="Influencer, Patient Advocate, Medical Consultant"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I conducted a series of stakeholder interviews with her in order to:"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="a) clarify key concepts in breast cancer treatment as questions arose during design iteration"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="b) elicit strategies for how to break down complex information to patients"
                        />
                    </div>
                    <div className="imageLayout">
                        <img className="imgStyle" src="/report/Traits-Tabs.png" alt="tabs" width="100%" height="auto" />
                        <div className="imgLabel">Tabs in the “Cancer Traits” page that were inspired by how Jennifer breaks information down to her patients</div>
                    </div>
                </div>

                {/* Marketer */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">Marketer ~ Gigi Pickney</div>
                        <BulletPoint
                            image="/utility/cap.png"
                            text="YouTube Producer, Landing Page Designer, Marketing Data & Strategy"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I provided her with up-to-date screenshots and clips to use for marketing materials"
                        />
                        <BulletPoint
                            image="/utility/collab.png"
                            text="I clarified features of the report to align marketing and product"
                        />
                    </div>
                    <div className="imageLayout">
                        <img className="imgStyle" src="/report/Landing-Site.png" alt="tabs" width="100%" height="auto" />
                        <div className="imgLabel">Gigi and I worked together on the Landing Site to make sure it aligned with the features of the Yerbba Report</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stakeholders