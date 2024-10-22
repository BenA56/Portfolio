import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"
import "./Testing.css"

function Testing(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Testing"
                        title="Mixing methods for optimal results"
                    />
                    <div className="content">Designing a complex internal tool could easily turn into a time suck. It could always be better and we used it every day so we were constantly reminded of its limitations. But we couldn’t let it become our number one priority.</div>
                </div>

                {/* 5 sec testing */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">5 - second testing</div>
                        <div className="content">I knew that if a user didn’t understand one of the sign up screens within a few seconds of seeing it, they were likely going to drop off. So, I used Maze to run asynchronous 5-second testing on individual screenshots. After showing the tester a screenshot of a design idea for 5 seconds, I would ask them to write their interpretation of what they just saw. Their answers were quite revealing.</div>
                        <BulletPoint
                            image="/utility/check.png"
                            text="I needed to tell them the end goal. They were not going to infer it. For example, phrasing step two as “Personalize your Report” instead of “Connect your  System” was more effective."
                        />
                        <BulletPoint
                            image="/utility/check.png"
                            text="I learned that people can only grasp 1-2 main concepts in five seconds, so I decided that a higher number of sparse screens was better than a lower number of dense screens"
                        />
                    </div>
                    <div className="numConcepts">
                        <div className="threeOnOne imageSection">
                            <img src="/signup/Three-On-One.svg" alt="concepts" width="200px" height="auto" />
                            <BulletPoint
                                image="/utility/remove.png"
                                text="1 screen x 3 concepts"
                                error={true}
                            />
                        </div>
                        <div className="oneOnThree imageSection" style={{alignItems: "center"}}>
                            <img src="/signup/One-On-Three.svg" alt="concepts" width="100%" height="auto" />
                            <BulletPoint
                                image="/utility/check.png"
                                text="3 screens x 1 concept each"
                            />
                        </div>
                    </div>
                </div>

                {/* Prototype */}
                <div className="subSection alignLeft">
                    <div className="h3">Full flow usability test</div>
                    <div className="content">I assembled a full start-to-finish prototype in Figma and then used UserBrain to run asynchronous usability tests that asked users to complete the sign up process and give their interpretations of the screens they were navigating.</div>
                    <BulletPoint
                        image="/utility/group.png"
                        text="5 participants"
                    />
                    <BulletPoint
                        image="/utility/play-button.png"
                        text="asynchronous"
                    />
                    <BulletPoint
                        image="/utility/test.png"
                        text="“Navigate through the sign up process”"
                    />
                    <div className="content">Since I had used 5-second testing during the design process, this round of usability testing mostly confirmed that the process worked. But it did help me smooth out some of the finer details.</div>
                </div>


            </div>
        </div>
    )
}

export default Testing  