import "../library/Sections.css";
import "./ReportRedesign.css";
import SectionHeader from "../library/SectionHeader.jsx"
import "./Competitors.css"

function Competitors(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">
                <div className="subSection alignCenter">
                    <SectionHeader
                        label="Competitors"
                        title="Defining a novel solution"
                        center={true}
                    />
                    <div className="content center">We assumed that we were building a novel product. But I wanted to make sure that we really were providing something new. So I did some digging, looking for any products related to breast cancer information and I noticed each of the existing methods for getting information had a critical hole.</div>
                </div>

                <div className="compLayout">
                    <img src="/report/Doctors.svg" alt="doctor" width="auto" height="auto" />
                    <img src="/report/GeneralInfo.svg" alt="doctor" width="auto" height="auto" />
                    <img src="/report/Tracking.svg" alt="doctor" width="auto" height="auto" />
                    <img src="/report/Yerbba.svg" alt="doctor" width="auto" height="auto" />
                </div>
            </div>
        </div>
    )
}

export default Competitors