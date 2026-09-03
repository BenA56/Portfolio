import SectionHeader from "../library/SectionHeader.jsx"

function Origin(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="How the Project Came to be"
                    title="Pivoting from the Initial Redesign Ask to Better Fit the Use Case"
                />
                <div className="content">
                    It started when I was tasked with redesigning the Final Review page in Bolt. We were deep in the weeds of the infamous "Get out of Edge" project where all of the functionality in our legacy underwriting system Edge needed to be moved into our newer underwriting system, Bolt. <strong>So the ask was simple: add all of the AUS functionality that exists in Edge into the Final Review Page in Bolt.</strong>
                </div>
                <div className="content">
                    After designing an initial mock-up and presenting to stakeholders, we started to get a pulse that the final review page might not be the best place for AUS. Stakeholders were struggling with the concept because, many of them being former underwriters, they knew that AUS was not only run as a final step but run many times throughout the life of the loan. <strong>So it felt weird to navigate away to a page called "Final Review" anytime you needed to run AUS.</strong>
                </div>
            </div>
            <div className="imageSection">
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Initial-Final-Review-Page.png" alt="Initial Final Review page design" width="100%" height="auto" />
                    <div className="imgLabel">initial final review page I designed that didn't fit the anytime/anywhere dynamic of AUS</div>
                </div>
            </div>
        </div>
    )
}

export default Origin
