import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"
import "./TreatCategories.css"

function TreatCategories(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Treatment Categories"
                        title="Painting the Bigger Picture"
                        center={true}
                    />
                    <div className="content center">We found in our initial research that breast cancer patients want a way to visualize what the next few years of their lives will look like. So they can start to think about work and family and the ripple effects of their diagnosis. But creating this visual was easier said then done. There was a lot of abstract information that needed to be conveyed.</div>
                </div>

                {/* Why */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3"> Why put resources into this? </div>
                        <BulletPoint
                            image=""
                            text="Marketing needed a visualization that could be used to communicate the value of the product at a glance"
                        />
                        <BulletPoint
                            image=""
                            text="Patients were frustrated by how difficult it is to visualize the next couple years of their lives. Without this birds eye view, they struggle to answer life’s most basic questions:"
                        />
                    </div>
                    <img className="imgStyle bigImage" src="/report/Needs.svg" alt="needs" width="auto" height="auto" />
                </div>

                {/* Getting Feedback */}
                <div className="subSection">
                    <div className="h3"> Getting Feedback </div>
                    <div className="content center"> After some difficult ideation to fit all of the information into one visual, we realized that our ideas were becoming quite coded. We needed to find out if these visualizations made any sense to people outside of the project. </div>
                    <BulletPoint
                        image="/utility/group.png"
                        text="5 participants through UserBrain"
                    />
                    <BulletPoint
                        image="/utility/feedback.png"
                        text="Each participant was asked to interpret each of the three visualizations"
                    />
                    <BulletPoint
                        image="/utility/feedback.png"
                        text="Each participant was asked which they like best and why"
                    />
                </div>

                {/* Too Complicated */}
                <div className="comparison">
                    <div className="compItem" style={{maxWidth: "450px"}}>
                        <div className="subSection">
                            <div className="h3"> Too Complicated </div>
                            <BulletPoint
                                image="/utility/remove.png"
                                text="Took testers a long time to decipher these, if they were able to at all, which lead to frustration"
                                error={true}
                            />
                            <BulletPoint
                                image="/utility/remove.png"
                                text="Made people feel like they were back in science class"
                                error={true}
                            />
                        </div>
                    </div>
                    <div className="compItem">
                        <div className="explorations">
                            <img className="explorationLeft" src="/report/Option1.svg" alt="report" />
                            <img className="explorationRight" src="/report/Option2.svg" alt="report" />
                        </div>
                    </div>
                </div>

                {/* Just Right */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/report/Option3.png" alt="report" width="100%" height="auto"/>
                    </div>
                    <div className="compItem" style={{maxWidth: "450px"}}>
                        <div className="subSection">
                            <div className="h3"> Just Right </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="Straightforward approach was understood immediately"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Still enough visuals for good scannability"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Still has a sense of directional time without putting it on a confusing chart"
                            />
                        </div>
                    </div>
                </div>

                {/* Final Version */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3">Final Version</div>
                        <div className="content"> After much iterating to clean up the design and several rounds of testing with the full prototype, here’s how the final version turned out </div>
                    </div>
                    <div className="finals">
                        <div className="finalLeft">
                            <img className="imgStyle" src="/report/Treatment-Options.png" alt="options" width="100%" height="auto"/>
                        </div>
                        <div className="finalRight">
                            <img src="/report/Options-Mobile.svg" alt="options" width="100%" height="auto"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TreatCategories