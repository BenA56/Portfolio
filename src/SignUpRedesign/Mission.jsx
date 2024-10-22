import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Mission(props) {
    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">
                <div className="subSection">
                    <SectionHeader
                        label="mission"
                        title="Redesign and build a Sign Up flow that increases the percentage of people who get their Yerbba Report"
                        center={true}
                    />
                    <div className="bulletList">
                        <BulletPoint
                            image="/utility/trustworthiness.png"
                            text="Increase the percentage of people who perceive Yerbba as trustworthy"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/search.png"
                            text="Increase the percentage of people who are able to find their health system"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/reduce.png"
                            text="Reduce drop-off when the user is redirected to their patient portal"
                            dark={true}
                        />
                    </div>
                </div>
                <div className="subSection">
                    <div className="h3"> My Role </div>
                    <div className="content center"> <b>Sole researcher.</b> Plan and conduct usability tests and user interviews. Explore product-market fit of big-picture ideas. Build test-ready, dynamic prototypes. </div>
                    <div className="content center"> <b>Sole designer.</b> Sketch ideas. Wireframe leading candidates. Present designs. Create design system. Take product from lo-fi to hi-fi.</div>
                    <div className="content center"> <b>Sole front-end developer.</b> Determine back-end requirements. Convert designs into pixel-perfect code. Adjust design details on the fly as needed. </div>
                </div>
            </div>
        </div>
    )
}

export default Mission