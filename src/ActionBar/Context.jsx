import SectionHeader from "../library/SectionHeader.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"

function Context(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Improvements"
                    title="Giving Underwriters the Right Context"
                />
                <div className="content">
                    One of the most revealing things was learning what underwriters are actually looking for in the AUS findings. The first thing they do is check to make sure that a few of the key numbers in the report, like debt to income ratio, match what we have in our system. But I realized that we actually didn't have a good way to view those numbers in our current system.
                </div>
                <div className="content">
                    So I made sure to include them in the findings screen that runs after the AUS run completes.
                </div>
            </div>
            <ImagePlaceholder label="[insert screenshot]" />
        </div>
    )
}

export default Context
