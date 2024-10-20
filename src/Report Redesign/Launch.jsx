import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"

function Launch(props) {
    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Launch"
                        title="The Yerbba Report was launched in Feb 2024 with mixed results"
                        center={true}
                    />
                    <div className="content center">Following the 6 month design process, it took me about 8 months to develop the front-end. 6 to code the product itself and then another 2 to layer on the pricing system on top. I learned a lot in this process about how designs transfer to code, what makes a good handoff, and how misteps in the design process can slow down development.</div>
                    <div className="content center" style={{marginBottom: "24px"}}>Unfortunately, I never got to see how this product was received by a large community of users. At the time of launch, our marketing campaign was far from ready. However we did have a small trickle of users coming in from our Youtube Channel and what we saw from them was positive.</div>
                    <BulletPoint
                        image="/utility/funnel.png"
                        text="Roughly 50% of users who got their free preview ended up purchasing their full report"
                    />
                    <BulletPoint
                        image="/utility/tap.png"
                        text="Users that purchased their report stayed engaged for weeks after"
                    />
                    <BulletPoint
                        image="/utility/campaign.png"
                        text="We received hundreds of submissions through the “Ask Yerbba” feature from users engaging with their report"
                    />
                </div>


            </div>
        </div>
    )
}

export default Launch