import SectionHeader from "../library/SectionHeader.jsx"

function Friction(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Improvements"
                    title="Adding Friction for Switching Investors"
                />
                <div className="content">
                    Underwriters run AUS against a specific investor, like Fannie Mae's DU or Freddie Mac's LP, depending on who the loan is being sold to. Switching investors mid-loan isn't a small decision — it can mean reworking parts of the loan to fit that investor's guidelines.
                </div>
                <div className="content">
                    So when an underwriter tried to run AUS against a different investor than their last run, I added a warning that required them to confirm before proceeding. The goal wasn't a frictionless flow, it was making sure a switch was never made by accident.
                </div>
            </div>
            <div className="imageSection">
                <img className="imgStyle" src="/aus/AUS-Last-Run-Warning.png" alt="Warning shown when switching AUS investors" width="100%" height="auto" />
            </div>
        </div>
    )
}

export default Friction
