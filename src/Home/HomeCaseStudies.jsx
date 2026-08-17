import "./HomeCaseStudies.css"
import CaseStudy from "./CaseStudy"
import CompanyOvercard from "./CompanyOvercard"

function HomeCaseStudies(props) {
    return (
        <div className="home-case-studies">
            <div className="home-case-studies-group">
                <CompanyOvercard
                    company="United Wholesale Mortgage (UWM)"
                    descriptor="Large Fintech Company"
                    dateRange="2025 - Present"
                    current
                />

                <CaseStudy
                    img="/bolt/Bolt.png"
                    title="Running AUS"
                    question={<><strong>Underwriters</strong> could run AUS from anywhere in their loan?</>}
                    page="ActionBar"
                    variant="solo"
                />
            </div>

            <div className="home-case-studies-group">
                <CompanyOvercard
                    company="Yerbba"
                    descriptor="Healthcare Startup"
                    dateRange="2022 - 2024"
                />

                <CaseStudy
                    images={["/report/Treatment-Options-Main-Content.png", "/report/Mobile-Options-1.png"]}
                    title="The Yerbba Report"
                    question={<><strong>Breast cancer patients</strong> understood all of their unique treatment options?</>}
                    page="BreastCancerReport"
                    variant="top"
                />

                <div className="home-case-studies-row">
                    <CaseStudy
                        img="/Manual-Review-Snapshot-2.png"
                        title="AI Manual Review"
                        question={<><strong>Yerbba employees</strong> could review AI-generated reports all in one screen?</>}
                        page="AIManualReviewTool"
                        variant="row-left"
                    />

                    <CaseStudy
                        img="/signup/Search-Results-Card.png"
                        title="EHR Signup"
                        question={<><strong>Breast cancer patients</strong> could connect their health records while understanding and trusting the system?</>}
                        page="EHRSignup"
                        variant="row-right"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeCaseStudies
