import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"
import "./Research.css"


function Research(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Preliminary Research"
                        title="Assessing the old Yerbba Report and the people who may use it"
                        center={true}
                    />
                    <div className="content center"> The “old” Yerbba Report existed as a proof-of-concept for the back-end. To prove that you could connect to a patient’s EHR provider, extract information from their medical records, and produce a personalized report. But not much thought had been given to the actual experience of said report. Or the people who were to use it. </div>
                </div>

                {/* Old Yerbba */}
                <div className="imageLayout">
                    <img className="bigImage imgStyle" src="/report/Old-Yerbba.png" alt="old" width="100%" height="auto" />
                    <div className="imgLabel"> Home page of the old Yerbba Report </div>
                </div>

                {/* round breakdown */}
                <div className="rounds">
                    <div className="round">
                        <div className="h3"> Round 1 </div>
                        <div className="content"> Inviting friends and family with cancer experience for live interviews and usability testing </div>
                        <div className="content"> - 5 Participants </div>
                        <div className="content"> - Live </div>
                        <div className="content"> - Interview + Usability Test </div>
                        <div className="content"> - Experience with any form of cancer </div>
                    </div>
                    <div className="round">
                        <div className="h3"> Round 2 </div>
                        <div className="content"> Interviewing and testing on Breast Cancer patients using UserBrain’s tester pool </div>
                        <div className="content"> - 5 Participants </div>
                        <div className="content"> - Asynchronous </div>
                        <div className="content"> - Interview + Usability Test </div>
                        <div className="content"> - Breast Cancer patients in treatment or remission </div>
                    </div>
                </div>

                {/* Conclusion #1 */}
                <div className="subSection">
                    <div className="l1"> Conclusion #1</div>
                    <div className="h3 center">Many users never click into their Yerbba Report</div>
                    <div className="comparison">
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/Old-Home.png" alt="old" width="100%" height="auto" />
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="Some users mistook the “See References” button as the main CTA given it’s placement on the page"
                                        error={true}
                                    />
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="Some users did not understand what the box representing the report was"
                                        error={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/My-Reports.png" alt="old" width="100%" height="auto" />
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="I made the card representing the report the clear CTA"
                                    />
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="I used a dash of skeuomorphism so that users would instantly understand what the card represents"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion #2 */}
                <div className="subSection">
                    <div className="l1"> Conclusion #2</div>
                    <div className="h3 center">Treatment Categories are hard to compare and interaction is not intuitive</div>
                    <div className="comparison">
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/Old-Categories.png" alt="old" width="100%" height="auto"/>
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="Uses vague language to describe the level of necessity for each treatment category"
                                        error={true}
                                    />
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="Lacks signifier to indicate you can click into each category to view specific options"
                                        error={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/New-Categories.png" alt="old" width="100%" height="auto" />
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="Uses a numerical scale + visual to describe the level of necessity for each treatment category"
                                    />
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="Card plus bottom right arrow act as signifiers that you can click into the category"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion #3 */}
                <div className="subSection">
                    <div className="l1"> Conclusion #3</div>
                    <div className="h3 center">Patients want a visual road-map of what is to come so that they can picture the next couple years of their life</div>
                    <div className="comparison">
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/Old-Visual.png" alt="old" width="100%" height="auto"/>
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="Provides historical treatment events, many of which are too small to affect the bigger picture"
                                        error={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/report/New-Visual.png" alt="old" width="100%" height="auto" />
                                <div className="bulletList" style={{width: "84%"}}>
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="Provides an overview of what the treatment journey will look like"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Research