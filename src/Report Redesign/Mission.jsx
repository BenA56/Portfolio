import "../library/Sections.css";
import "./ReportRedesign.css";
import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"


function Mission(props) {

    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">
                <div className="subSection">
                    <SectionHeader
                        label="mission"
                        title="Redesign and build a Yerbba Report that Breast Cancer patients will buy and use"
                        center={true}
                    />
                    <div className="bulletList">
                        <BulletPoint
                            image="/utility/assess.png"
                            text="Assess the UX of the old Yerbba Report for untapped value"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/b-cancer.png"
                            text="Research the needs of breast cancer patients to determine what they value enough to pay for"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/iterative.png"
                            text="Iterate and test designs to produce a high-fidelity prototype"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/launch.png"
                            text="Build and launch the Yerbba Report"
                            dark={true}
                        />
                    </div>
                </div>
                <div className="subSection">
                    <div className="h3"> My Role </div>
                    <div className="content center"> <b>Sole researcher.</b> Plan and conduct usability tests and user interviews. Explore product-market fit of big-picture ideas. Build test-ready, dynamic prototypes. </div>
                    <div className="content center"> <b>Sole designer.</b> Sketch ideas. Wireframe leading candidates. Present designs. Create design system. Take product from lo-fi to hi-fi. </div>
                    <div className="content center"> <b>Sole front-end developer.</b> Determine back-end requirements. Convert designs into pixel-perfect code. Adjust design details on the fly as needed. </div>
                </div>
            </div>
        </div>
    )
}

export default Mission