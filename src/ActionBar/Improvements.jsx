import SectionHeader from "../library/SectionHeader.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"

function Improvements(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Improvements"
                    title="Improvements from the Testing"
                />
            </div>

            {/* 1. Making Previous Result More Discoverable */}
            <div className="imageSection">
                <div className="subSection alignLeft">
                    <div className="h3">Making Previous Result More Discoverable</div>
                    <div className="content">
                        Almost everyone missed the previous result at first, as it was not placed in the path of their natural F-Scan of the modal. So instead, I moved it to be right where their eyes would be looking first. This was important because opening the finding of the most recent AUS run was almost as important to them as initiating a new run.
                    </div>
                </div>
                <div className="comparison">
                    <div className="compItem">
                        <ImagePlaceholder label="[insert screenshot]" />
                    </div>
                    <div className="compItem">
                        <ImagePlaceholder label="[insert screenshot]" />
                    </div>
                </div>
            </div>

            {/* 2. Providing the Data Points that They're Looking for in the Findings */}
            <div className="imageSection">
                <div className="subSection alignLeft">
                    <div className="h3">Providing the Data Points that They're Looking for in the Findings</div>
                    <div className="content">
                        One of the most revealing things was learning what underwriters are actually looking for in the AUS findings. The first thing they do is check to make sure that a few of the key numbers in the report, like debt to income ratio, match what we have in our system. But I realized that we actually didn't have a good way to view those numbers in our current system.
                    </div>
                    <div className="content">
                        So I made sure to include them in the findings screen that runs after the AUS run completes.
                    </div>
                </div>
                <ImagePlaceholder label="[insert screenshot]" />
            </div>
        </div>
    )
}

export default Improvements
