import SectionHeader from "../library/SectionHeader.jsx"

function MultiTasking(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Multi-tasking"
                    title="Accounting for Multi-tasking During the AUS Run"
                />
                <div className="content">
                    It’s always scary when you ask your devs how long a process that accesses a third party system will take. For AUS, their answer was that they weren’t sure.
                </div>
                <div className="content">
                    It could take 20 seconds. It could take 5 minutes.
                </div>
                <div className="content">
                    I knew that underwriters were not going to sit around and waste valuable minutes when they could be doing other things in the loan to get it closer to the closing table.
                </div>
                <div className="content">
                    Which meant the AUS experience needed to be designed to be run in the background.
                </div>
                <div className="content">
                    This meant the popover needed to be able to close while it was running. The AUS feature needed to indicate that it was running while closed, so that the underwriter can remember that they’re waiting on an AUS run. And, perhaps most importantly, it needed to have a strong indicator of when the run has finished, so that the underwriter is reminded to go back in and make sure that the results are good.
                </div>
            </div>

            <div className="imageLayout">
                <img className="imgStyle" src="/aus/AUS-Popover-Loading.png" alt="The AUS popover open with the form disabled and a Running DU spinner" width="100%" height="auto" />
                <div className="imgLabel">The popover shows the run in progress</div>
            </div>
            <div className="imageLayout">
                <img className="imgStyle" src="/aus/In-Bar-Loading.png" alt="The action bar with the AUS pill showing a loading indicator after the popover is closed" width="100%" height="auto" />
                <div className="imgLabel">Closing the popover keeps the run going, with the action bar holding the loading state</div>
            </div>
            <div className="imageLayout">
                <img className="imgStyle" src="/aus/In-Bar-New-Result.png" alt="The action bar with a NEW badge and a red alert icon on the AUS pill once the run finishes" width="100%" height="auto" />
                <div className="imgLabel">A strong indicator on the action bar reminds the underwriter to go back in and check the result</div>
            </div>
        </div>
    )
}

export default MultiTasking
