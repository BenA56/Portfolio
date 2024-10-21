import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Users(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">
                
                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Discovery #1"
                        title="Organizing by users is more useful than organizing by reports"
                    />
                    <div className="content">At first our goal for this tool was simply to review and approve reports. So the backbone of the architecture was organized by reports.</div>
                    <div className="content">But after launching The Yerbba Report in Feb 2024, we realized that we were missing a fundamental layer of user management beneath the report management.</div>
                </div>

                {/* Old vs New */}
                <div className="comparison">
                    <div className="compItem">
                        <div className="imageSection" style={{alignItems: "center"}}>
                            <img className="imgStyle" src="/manReview/Reports-Page.png" alt="reports" width="100%" height="auto"/>
                            <div style={{width: "84%"}}>
                                <BulletPoint
                                    image="/utility/remove.png"
                                    text="My first design that organized by individual reports"
                                    error={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="compItem">
                        <div className="imageSection alignCenter">
                            <img className="imgStyle" src="/manReview/Prod-Users-Page.png" alt="reports" width="100%" height="auto"/>
                            <div style={{width: "84%"}}>
                                <BulletPoint
                                    image="/utility/check.png"
                                    text="My updated design that organizes by users"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3"> Prioritizing users </div>
                    <div className="content"><b> New Reports > Reports with Updates ~ </b> New reports mean that we have a potential for a new sale. Users with a new report are stuck on an accuracy check screen until their report has been reviewed at least one time. Every second that they are kept waiting reduces the chance that we will convert them into a customer.</div>
                    <div className="content"><b> Paid User > Free Preview User ~ </b> A paid user is paying a subscription fee to keep their report updated. Whereas, a free preview user has already received their initial report and likely decided not to purchase it.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3"> Users with multiple reports </div>
                    <div className="content">Although rare, a user with multiple breast cancer diagnosis will have multiple reports. This is an important thing for the reviewer to know in order to have a complete picture of the person that they’re reviewing a report for.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3"> Putting users on hold </div>
                    <div className="content">When a user fails to convert to a customer after receiving their free preview, it is no longer worth it to keep their report updated. These users needed to be “put on hold”, meaning they would be excluded from the expensive daily refresh of medical records.</div>
                    <div className="content">In order to make this consequential judgment call, the reviewer needed a thorough user management view.</div>
                </div>

            </div>
        </div>
    )
}

export default Users