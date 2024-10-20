import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"

function TreatOptions(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Treatment Options"
                        title="Providing a hook to increase discoverability"
                    />
                    <div className="content">When a user decides to do chemotherapy, the decision making process is not over. Each regimen of chemotherapy has its own pros and cons. Some may be more aggressive in killing the cancer, but bring harsh side effects. Others might be less aggressive but allow the patient to have a higher quality of life while in treatment. This is true for all of the treatment categories. These “inner-option”, as I called them, were like little nuggets of gold for our users. But getting them to dig up these nuggets when they didn’t know they existed was easier said then done.</div>
                </div>

                {/* Why does it matter */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3"> Why does discoverability of treatment options matter? </div>
                        <BulletPoint
                            image="/utility/magnet.png"
                            text="In early testing, users often had their aha moment when they eventually found these inner-options. It opens their mind to a whole layer of decision making they didn’t know they had options for."
                        />
                        <BulletPoint
                            image="/utility/way.png"
                            text="We had a ton of valuable content for each inner-option, including pros, cons, schedule, common questions, etc"
                        />
                    </div>
                    <div className="imageLayout">
                        <img className="imgStyle bigImage" src="/report/Option-Modal.png" alt="option" width="100%" height="auto"/>
                        <div className="imgLabel"> Inner treatment option modal I designed in the final product that I needed to make discoverable </div>
                    </div>
                </div>

                {/* No one clicks */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3"> First attempt -> No one clicks </div>
                        <div className="content"> Breast cancer patients did not anticipate that each option would have so much information and no one had the instinct to click on the cards </div>
                        <BulletPoint
                            image="/utility/remove.png"
                            text="No hook to give people a reason to click"
                            error={true}
                        />
                        <BulletPoint
                            image="/utility/remove.png"
                            text="Each option is identified by an impossible-to-remember scientific name"
                            error={true}
                        />
                        <BulletPoint
                            image="/utility/remove.png"
                            text="Very hard to compare options. Would have to open and close modals, remembering info about the previous option you looked at"
                            error={true}
                        />
                        <BulletPoint
                            image="/utility/remove.png"
                            text="No CTA on cards to signify clickability"
                            error={true}
                        />
                    </div>
                    <img className="imgStyle bigImage" src="/report/Bad-Cards.png" alt="option" width="100%" height="auto"/>
                </div>

                {/* Adding a hook */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3"> Adding a hook + way to compare </div>
                        <div className="content"> After a lot of staring at the wall willing a solution to come to me, as well as several rounds of testing, I eventually came up with a solution that turned this feature into the star of the report. </div>
                        <BulletPoint
                            image="/utility/check.png"
                            text="Hook by “might be for you if..”"
                        />
                        <BulletPoint
                            image="/utility/check.png"
                            text="Each option is identified by its biggest advantage instead of its long, scientific name"
                        />
                        <BulletPoint
                            image="/utility/check.png"
                            text="Easy to compare options attribute-by-attribute by clicking between the tabs"
                        />
                        <BulletPoint
                            image="/utility/check.png"
                            text="CTA to signify clickability"
                        />
                    </div>
                    <img className="bigImage" src="/report/Comparison-Tool.svg" alt="option" width="100%" height="auto"/>
                </div>


            </div>
        </div>
    )
}

export default TreatOptions