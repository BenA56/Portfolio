import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"
import "./FlexibleSearch.css"

function FlexibleSearch(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection">
                    <SectionHeader
                        label="flexible search"
                        title="Designing for different ways of searching"
                        center={true}
                    />
                    <div className="content center">Designing a complex internal tool could easily turn into a time suck. It could always be better and we used it every day so we were constantly reminded of its limitations. But we couldn’t let it become our number one priority.</div>
                </div>

                {/* System Levels */}
                <div className="levels">
                    <img src="/signup/SystemLevels.svg" alt="levels" width="auto" height="auto" />
                    <div className="content sideText"> Assuming people remember where they go for care, they may identify it on any level </div>
                </div>

                {/* Location Levels */}
                <div className="levels">
                    <img src="/signup/LocationLevels.svg" alt="levels" width="auto" height="auto" />
                    <div className="content sideText"> They need a way to search if they don’t remember the name of the place they go </div>
                </div>

                {/* Inspiration from Apple */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3">Inspiration from Apple Health</div>
                        <div className="content center">The Apple Health app was the only other example I found of an interface that connects to health systems and is searchable on multiple levels</div>
                    </div>
                    <div className="comparison">
                        <div className="compItem compMobile">
                            <div className="imageSection">
                                <img className="imgStyle" src="/signup/Apple-Inspo-1.png" alt="apple" width="300px" height="auto" />
                                <BulletPoint
                                    image="/utility/check.png"
                                    text="I liked the general idea of being able to display matches at any level of the health system or location"
                                />
                            </div>
                        </div>
                        <div className="compItem compMobile">
                        <div className="imageSection">
                            <img className="imgStyle" src="/signup/Apple-Inspo-2.png" alt="apple" width="300px" height="auto" />
                                <BulletPoint
                                    image="/utility/remove.png"
                                    text="Sloppy Implementation with tons of duplicate matches polluting the results"
                                    error={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Result Types */}
                <div className="imageSection">
                    <div className="h3">Final Search Result Types</div>

                    <div className="bulletList">
                        <BulletPoint
                            image="/utility/check.png"
                            text="Added icons so user can more easily recognize what aspect of the system their search result is hitting on"
                        />
                        <BulletPoint
                            image="/utility/check.png"
                            text="Rounded out corners and applied mukta font for friendlier, less medical feel"
                        />
                    </div>

                    <div className="subSection">
                        <div className="content">System</div>
                        <img className="imgStyle" src="/signup/Result-System.png" alt="searchType" width="100%" height="auto" />
                    </div>

                    <div className="subSection">
                        <div className="content">Hospital/Location</div>
                        <img className="imgStyle" src="/signup/Result-Hospital.png" alt="searchType" width="100%" height="auto" />
                    </div>

                    <div className="subSection">
                        <div className="content">State</div>
                        <img className="imgStyle" src="/signup/Result-State.png" alt="searchType" width="100%" height="auto" />
                    </div>

                    <div className="subSection">
                        <div className="content">City</div>
                        <img className="imgStyle" src="/signup/Result-City.png" alt="searchType" width="100%" height="auto" />
                    </div>
                </div>

                {/* Pairing Algorithm */}
                <div className="subSection">
                    <div className="h3">Pairing Algorithm to Eliminate Duplicates</div>
                    <div className="content center">When a user searches for Michigan, I didn’t want them to see 27 results that all correlate to the same system just because that system has 27 different locations in Michigan. So I wrote an algorithm to pair down results so that each system is represented just once. This was really tricky to get right. It felt like playing whack-a-mole, but it was essential to optimizing the user experience of the search results.</div>
                </div>
            
            </div>
        </div>
    )
}

export default FlexibleSearch