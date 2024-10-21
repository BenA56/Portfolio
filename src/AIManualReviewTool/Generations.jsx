import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Generations(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">
                
                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Discovery #3"
                        title="Eliminating Unnecessary Report Generations"
                    />
                    <div className="content">A user’s medical record can change for many reasons. Sometimes, it’s critical information that would dramatically affect their Yerbba Report. Say, for example, that someone completed their lumpectomy. The post-treatment options in that person’s report could look a lot different knowing the results of the surgery.</div>
                    <div className="content">Other times, however, the change could be as small as a routine flu shot, having no effect on their Yerbba Report. In these cases, it is very wasteful to re-generate a report.</div>
                </div>

                {/* Step 1 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/manReview/Prod-Users-Page.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3">1. Reviewer sees a user with new medical records </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="# of days waiting helps them prioritize"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="# of new versions already gives them a hint as to whether it’s a small update or large update"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/manReview/Change-Log.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3">2. Reviewer opens the user’s list of records </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="Can open the raw text of every individual medical record"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="“Insert” or “Update” tag lets reviewer know if the document is brand new or an updated version of one that already existed"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/manReview/Diff-Checker.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3">3. Reviewer compares all new versions with their previous version </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="All medical records with diffs are automatically pulled up for reviewer to click through"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="By default, unchanged parts of the medical record are hidden but reviewer can toggle them on if they need more context"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/manReview/Diff-Checker.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3">4. Reviewer generates new version of report only if changes are significant </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="If they deem the changes significant, they click “Re-generate Report”"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Then they mark the user as “checked”, which moves all “new” document versions to “old”"
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Generations