import SectionHeader from "../library/SectionHeader.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"

function StatusChanges(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Status Changes"
                    title="Making Status Changes More Scannable"
                />
                <div className="content">
                    It can be very important for the underwriter to see a history of status changes for their AUS runs.
                </div>
                <div className="content">
                    Why you ask?
                </div>
                <div className="content">
                    Let’s say a broker calls in and wants to know why their AUS run has gone from eligible to ineligible. The underwriter would need to scan through their history of AUS runs, find the run that went from eligible to ineligible, and open the findings to figure out what happened in between.
                </div>
                <div className="content">
                    In the legacy system, this was a text-only column of wordy statuses. Finding the critical flipping point required reading through the column, a cumbersome process putting strain on the eyes.
                </div>
            </div>

            <ImagePlaceholder label="[insert picture of old status column]" />

            <div className="subSection alignLeft">
                <div className="content">
                    I knew that this important column could use some iconography and color to make understanding the AUS history more scannable.
                </div>
                <div className="content">
                    Working with 20-something different statuses, my first instinct was to create several different groupings. But after talking to some subject matter experts, all that really matters to underwriters is “good” or “not good”.
                </div>
                <div className="content">
                    So I made eligible findings have a green success check and every other status have a red error check.
                </div>
            </div>

            <ImagePlaceholder label="[insert picture of new statuses]" />

            <div className="subSection alignLeft">
                <div className="content">
                    When I tested this out on actual underwriters, they loved how much easier it was to scan through. And they had no issues with the binary categories.
                </div>
                <div className="content">
                    Easy win.
                </div>
            </div>
        </div>
    )
}

export default StatusChanges
