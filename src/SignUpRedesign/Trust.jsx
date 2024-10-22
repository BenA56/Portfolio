import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Trust(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection">
                    <SectionHeader
                        label="Building Trust"
                        title="Transparency was the key to trust"
                        center={true}
                    />
                    <div className="content center">In early testing, trust was the biggest concern. People were not okay giving us access to their sensitive health data unless they knew exactly what we were going to do with it and why.</div>
                </div>

                {/* Suspicion */}
                <div className="subSection">
                    <div className="h3">A Recipe for Suspicion</div>
                    <div className="content">Our target market consisted mostly of older women, who came to our website with great suspicion</div>
                    <BulletPoint
                        image="/utility/woman-avatar.png"
                        text="Many women have a natural mistrust of the medical system given the long history of women’s health needs being under-researched and under-prioritized"
                    />
                    <BulletPoint
                        image="/utility/old-lady-avatar.png"
                        text="Many older folks have a natural mistrust of technology, especially when it comes to handing over sensitive data "
                    />
                </div>

                {/* Feel good before sharing data */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3"> Explaining what’s going to happen </div>
                        <BulletPoint
                            image="/utility/health-care.png"
                            text="Making an effort to explain how it works made people feel like we cared about them, regardless of whether they fully understood it"
                        />
                        <BulletPoint
                            image="/utility/clarity.png"
                            text="Seeing this breakdown gave people a clearer mental model, which made them feel more confident continuing on"
                        />
                    </div>
                    <img className="imgStyle" src="/signup/Connection-Steps.png" alt="connection" width="100%" height="auto" />
                </div>

                {/* Feel good after */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3"> Making users feel good after they decide to share their data </div>
                        <BulletPoint
                            image="/utility/health-care.png"
                            text="Ensuring them that a human was going to look over their report made them feel cared for"
                        />
                        <BulletPoint
                            image="/utility/clarity.png"
                            text="Being transparent with exactly what was happening after they connected their health system put their mind at ease"
                        />
                    </div>
                    <img className="imgStyle bigImage" src="/signup/Accuracy-Check.png" alt="connection" width="100%" height="auto" />
                </div>

            </div>
        </div>
    )
}

export default Trust