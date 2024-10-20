import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"

function Constraints(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Constraints"
                        title="A solo designer tackling a large project with complex problems"
                    />
                    <div className="content"> Redesigning the Yerbba Report required me to work through several unique constraints, imposed both by the stage of Yerbba as a company and the industry we sought to provide value in. </div>
                </div>

                {/* Constraint 1 */}
                <div className="subSection alignLeft">
                    <div className="h3">Recruiting breast cancer patients</div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="We didn’t have the time, money, or existing user base to recruit breast cancer patients for research"
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I used UserBrain’s large pool of testers to get asynchronous recordings from breast cancer patients in one day"
                    />
                </div>

                {/* Constraint 2 */}
                <div className="subSection alignLeft">
                    <div className="h3">Breast Cancer Knowledge</div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="It’s difficult to work through product ideas on the treatment of breast cancer when you’re not an expert. It’s especially difficult when you know next-to-nothing."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I read a book called “Radical: The Science, Culture, and History of Breast Cancer in America”, which helped me identify gaps in the patient experience."
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I conducted a series of stakeholder interviews with our oncologist, which helped me model the patient/doctor relationship."
                    />
                </div>

                {/* Constraint 3 */}
                <div className="subSection alignLeft">
                    <div className="h3">Working with what we have on the back-end</div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="Any changes to the pre-existing system that parsed medical records and provided data to the front-end were complex and time-consuming."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I largely focused on detecting untapped sources of value in the old Yerbba Report, and then making those things more discoverable and understandable."
                    />
                </div>

                {/* Constraint 4 */}
                <div className="subSection alignLeft">
                    <div className="h3">Creating a fully responsive product</div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="Since we didn’t have a mobile app and our users may be accessing their report on their way to a doctor’s appointment, the experience needed to be fully responsive for all screen sizes"
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I found that designing for mobile first was more effective, because it was easier to expand a design from less space to more space than to condense it from more space to less space"
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I meticulously created a web and mobile version for each design and documented any differences that would need to be coded"
                    />
                </div>

                {/* Constraint 5 */}
                    <div className="subSection alignLeft">
                    <div className="h3">Threading the Legal Needle</div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="It was crucial that our product was not interpreted as an official provider of medical services or advice."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I framed the experience as a personalized accumulation of publicly available information, rather than as an AI second opinion."
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I worked with our CEO to craft a series of language guidelines, which replaced phrases like “Ask a doctor” to “Ask a Yerbba Expert” and “necessity” to “likelihood”. (Pictured Below)"
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I created disclaimers barricading the more legally sensitive parts of the report, for added security"
                    />
                </div>
            </div>
        </div>
    )
}

export default Constraints