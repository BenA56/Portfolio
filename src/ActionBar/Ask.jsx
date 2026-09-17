import SectionHeader from "../library/SectionHeader.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"

function Ask(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="The Ask"
                    title="Redesign the Final Review Page in Bolt"
                />
                <div className="content">
                    It all started when I was tasked with redesigning the Final Review Page of Bolt, UWM’s newer underwriting system.
                </div>
                <div className="content">
                    You see, Bolt had replaced the legacy system Edge a few years back. But it only replaced a subset of the features in Edge, leaving underwriters (and IT) caught in limbo between two completely different systems.
                </div>
                <div className="content">
                    So “Get out of Edge” (or “GOOEY” as we lovingly called it) was all the rage amongst the Bolt product team.
                </div>
                <div className="content">
                    So I was asked to redesign the final review page in Bolt, with all of the AUS functionality that already existed in Edge.
                </div>
                <div className="compareRow">
                    <div className="compareItem">
                        <img className="imgStyle" src="/aus/Old-AUS.png" alt="AUS in the legacy system, Edge" width="100%" height="auto" />
                    </div>
                    <img className="compareArrow" src="/utility/Arrow-Right.svg" alt="becomes" width="24px" height="24px" />
                    <div className="compareItem">
                        <ImagePlaceholder label="[insert Bolt AUS screenshot]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ask
