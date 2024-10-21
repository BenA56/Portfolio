import SectionHeader from "../library/SectionHeader.jsx"


function Results(props) {
    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Results"
                        title="After two years, I had designed and  built a dynamic tool to manually review Yerbba Reports"
                        center={true}
                    />
                </div>

                {/* Message */}
                <div className="imageLayout">
                    <img className="imgStyle " src="/manReview/Beltran-Proof.jpg" alt="proof" width="100%" height="auto"/>
                    <div className="imgLabel">Message from CEO after one of the major improvements to the tool. Since the CEO was the only one doing manual reviews, the only measure of success I had was his feedback. And there was always more to improve!</div>
                </div>

            </div>
        </div>
    )
}

export default Results