import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"


function Navigation(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Navigation"
                        title="Optimizing for Web and Mobile"
                    />
                    <div className="content">Web and mobile devices have very different navigational patterns. Because we needed the Yerbba Report to be fully responsive, I decided it would be worth it to build separate navigational patterns for web and mobile.</div>
                </div>

                {/* Web */}
                <div className="comparison">
                    <div className="compItem">
                        <img src="/report/web.svg" alt="web" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection" style={{maxWidth: "450px"}}>
                            <div className="h3"> Web: T-Shape </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="T shape visually differentiates the 1st level from the 2nd level"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Collapsible side bar gives users greater sense of control"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Overlay gives user’s an escape route from every page"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="comparison">
                    <div className="compItem">
                        <img src="/report/Mobile.svg" alt="web" width="100%" height="auto" />
                    </div>
                    <div className="compItem">
                        <div className="subSection" style={{maxWidth: "450px"}}>
                            <div className="h3"> Mobile: Double Horizontal </div>
                            <BulletPoint
                                image="/utility/check.png"
                                text="Dissapearing on scroll-down clears space for the user to absorb content"
                            />
                            <BulletPoint
                                image="/utility/check.png"
                                text="Appearing when the user scrolls up presents navigation when they may be ready to move on"
                            />
                            <BulletPoint
                                image="/utility/caution.png"
                                text="We were concerned if the horizontal scroll on the second level would be discoverable, but it was in testing"
                                caution={true}
                            />
                            <BulletPoint
                                image="/utility/caution.png"
                                text="It’s possible users could feel a lack of control when the nav bar automatically appears and reappears"
                                caution={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Explorations */}
                <div className="subSection">
                    <div className="h3">Traditional Mobile Patterns Didn’t Work</div>
                    <div className="comparison">
                        <div className="compItem" style={{maxWidth: "450px"}}>
                            <div className="imageSection">
                                <img src="/report/Hamburger.svg" alt="ham" width="auto" height="auto" />
                                <BulletPoint
                                    image="/utility/remove.png"
                                    text="Hamburger style made the pages much less discoverable in testing"
                                    error={true}
                                />
                            </div>
                        </div>
                        <div className="compItem" style={{maxWidth: "450px"}}>
                            <div className="imageSection">
                                <img src="/report/AppTabs.svg" alt="ham" width="auto" height="auto" />
                                <BulletPoint
                                    image="/utility/remove.png"
                                    text="App style didn’t work because this wasn’t an app. It needed to work on mobile browsers, where the search is now at the bottom"
                                    error={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation