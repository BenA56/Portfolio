import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Mission(props) {
    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">
                <div className="subSection">
                    <SectionHeader
                        label="mission"
                        title="Create an internal tool for the Yerbba Team to review and approve AI-generated breast cancer reports"
                        center={true}
                    />
                    <div className="bulletList">
                        <BulletPoint
                            image="/utility/flexible.png"
                            text="Flexible ~ set of actions to account for unpredictable AI results"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/energy.png"
                            text="Efficient ~ flow to get reports out the door quickly and maximize the chances of converting each user"
                            dark={true}
                        />
                        <BulletPoint
                            image="/utility/visibility.png"
                            text="Visibile ~ system status to give reviewer every scrap of information needed to make decisions"
                            dark={true}
                        />
                    </div>
                </div>
                <div className="subSection">
                    <div className="h3"> My Role </div>
                    <div className="content center"> <b>Sole researcher.</b> Conduct stakeholder interviews with CEO to map out reviewer journey. Listen. Question. </div>
                    <div className="content center"> <b>Sole designer.</b> Ideate, wireframe, and present </div>
                    <div className="content center"> <b>Sole front-end developer.</b> Determine back-end requirements. Convert designs to code. Adjust design details on the fly as needed. </div>
                </div>
            </div>
        </div>
    )
}

export default Mission