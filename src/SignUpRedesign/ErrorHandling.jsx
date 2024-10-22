import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function ErrorHandling(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Error Handling"
                        title="What happens when things go wrong"
                    />
                    <div className="content">With so much chaos in the web of healthcare, I realized that we needed a constant loop of feedback between us and our users. Adding one hospital that’s missing from our database might not seem like a big deal, but over time this loop of feedback would help us clean things up.</div>
                </div>

                {/* Reporting Errors */}
                <div className="imageSection">
                    <div className="subSection alignLeft">
                        <div className="h3">Allowing users to directly report issues</div>
                        <BulletPoint
                            image="/utility/feedback.png"
                            text="This opened up a line of communication between us and our users. Often times, people that reached out with issues ended up agreeing to be interviewed and participate in research."
                        />
                        <BulletPoint
                            image="/utility/find.png"
                            text="Helping us spot small problems sometimes led to larger discoveries, such as a major health system we had never heard of or a system of broken FHIR endpoints."
                        />
                    </div>
                    <div className="comparison">
                        <div className="compItem">
                            <img className="imgStyle" src="/signup/Error-Handling-1.png" alt="error" width="100%" height="auto"/>
                        </div>
                        <div className="compItem">
                            <img className="imgStyle" src="/signup/Error-Handling-2.png" alt="error" width="100%" height="auto"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ErrorHandling