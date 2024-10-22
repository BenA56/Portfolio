import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Portal(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Patient Portal"
                        title="Slowing down users to prepare them for redirection"
                    />
                    <div className="content">One of the trickiest parts of the Sign Up design was preparing users to be redirected to their patient portal. There was no way around it. They had to go there to give us access to their medical records, which we needed to generate their report.</div>
                    <div className="content">The best I could do to minimize drop-off in this step was slow them down and prepare them. I hoped that this preparation would prevent confusion when they hit “Go to Portal”, only to find themselves on a website that they may or may not be familiar with.</div>
                </div>

                {/* How to connect */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">“How to Connect” Page</div>
                        <BulletPoint
                            image="/utility/way.png"
                            text="Explains to user where they’re about to be redirected and what to do"
                        />
                        <BulletPoint
                            image="/utility/snail.png"
                            text="Forces user to slow down and read it with required “I understand” button"
                        />
                    </div>
                    <div className="comparison">
                        <div className="compItem">
                            <img className="imgStyle" src="/signup/How-To-Connect-1.png" alt="how" width="100%" height="auto" />
                        </div>
                        <div className="compItem">
                            <img className="imgStyle" src="/signup/How-To-Connect-2.png" alt="how" width="100%" height="auto" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portal