import SectionHeader from "../library/SectionHeader.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"

function LegacyTwo(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Improvements"
                    title="[TODO: second improvement over how AUS worked in Edge]"
                />
                <div className="content">[TODO: what Edge did, why it was a problem for underwriters, and what I changed]</div>
            </div>
            <ImagePlaceholder label="[insert Edge vs. Bolt screenshot]" />
        </div>
    )
}

export default LegacyTwo
