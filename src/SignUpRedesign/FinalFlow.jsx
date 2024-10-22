import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function FinalFlow(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection">
                    <SectionHeader
                        label="Final Flow"
                        title="Walking users through the process"
                        center={true}
                    />
                    <div className="content center">The guiding principle for the final user flow was to make the how and why of each step clear in just a few seconds, with only 1-2 concepts per screen</div>
                </div>

                {/* Step 1 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Sign-Up.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 1. Account Creation </div>
                            <BulletPoint
                                image="/utility/click.png"
                                text="I implemented Google Oauth for one click account creation"
                            />
                            <BulletPoint
                                image="/utility/paint-brush.png"
                                text="I customized the out-of-box account creation package from Meteor to use proper styles"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Yerbba-Signup.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 2. Personalize Your Report </div>
                            <BulletPoint
                                image="/utility/target.png"
                                text="Naming the step “Personalize Your Report” instead of “Connect your System” better communicates the end goal for the user"
                            />
                            <BulletPoint
                                image="/utility/clarity.png"
                                text="Explainer graphic below the CTA helps people build a mental model of how their records become a report ... and this understanding motivates them to proceed"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/None-Connected.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 3. Connect Modal - Empty State </div>
                            <BulletPoint
                                image="/utility/action.png"
                                text="Clear CTA - “Find your system”"
                            />
                            <BulletPoint
                                image="/utility/question-mark.png"
                                text="Qualifier explaining what to connect, since users may have been to several different hospitals and clinics"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Starting-Search.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 4. Connect Modal - Search </div>
                            <BulletPoint
                                image="/utility/balance.png"
                                text="“Where have you been tested or treated?” is specific enough that they know what to search but doesn’t impose how to search"
                            />
                            <BulletPoint
                                image="/utility/flexibility.png"
                                text="Example searches demonstrate the flexibility of the search to the user"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Search-Results.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 5. Connect Modal - Search Results </div>
                            <BulletPoint
                                image="/utility/Arrow-Right.svg"
                                text="Arrow on each result acts as a clear signifier that the user clicks on a system to proceed"
                            />
                            <BulletPoint
                                image="/utility/star.png"
                                text="Part of result that matches is highlighted in bold"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Confirm-System.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 6. Connect Modal - Confirm System </div>
                            <BulletPoint
                                image="/utility/chemistry.png"
                                text="In testing, we found that whenever users click on a system result they expect to be taken to a full view of that system"
                            />
                            <BulletPoint
                                image="/utility/notes.png"
                                text="Having a page for the system is useful because adding notes and extra context can be helpful for the user to identify the system as theirs. Remember, the brand of the system may not match the physical hospital the user recognizes."
                            />
                        </div>
                    </div>
                </div>

                {/* Step 7 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/How-To-Connect-2.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 7. Connect Modal - Go to Portal </div>
                            <BulletPoint
                                image="/utility/snail.png"
                                text="Explains redirection and forces user to slow down and notice"
                            />
                            <BulletPoint
                                image="/utility/remove.png"
                                text="Looking back ... there’s nothing that clearly states “You are about to be redirected”"
                                error={true}
                            />
                            <BulletPoint
                                image="/utility/remove.png"
                                text="Looking back ... I would have made the “Go to Portal” button look different than the others since it redirects instead of just proceeding in the sign up flow. Perhaps a 45 degree arrow instead of flat arrow."
                                error={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Step 8 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Connected-Systems.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 8. Connect Modal - Success </div>
                            <BulletPoint
                                image="/utility/check-box.png"
                                text="Health System object maintains consistent look from when user first saw it in the search results. But its status is clearly marked as “connected”."
                            />
                            <BulletPoint
                                image="/utility/path.png"
                                text="Gives user the opportunity to connect another system if they have multiple, but makes it clear that they could be done."
                            />
                        </div>
                    </div>
                </div>

                {/* Step 9 */}
                <div className="comparison">
                    <div className="compItem">
                        <img className="imgStyle" src="/signup/Finish-Sign-Up.png" alt="step" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection alignLeft">
                            <div className="h3"> 9. Finish </div>
                            <BulletPoint
                                image="/utility/action.png"
                                text="Clear “Finish” CTA"
                            />
                            <BulletPoint
                                image="/utility/remove.png"
                                text="Looking back ... I would display the connections here instead of the previous step for better clarity and a greater feeling of success"
                                error={true}
                            />
                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default FinalFlow