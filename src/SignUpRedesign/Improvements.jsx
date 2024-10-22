import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"


function Improvements(props) {

    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Hero */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Improvments"
                        title="Ideas for improvements"
                    />
                    <div className="content">Later on, I was booking a doctors appointment through ZocDoc and I realized something about the sign up process I had designed</div>
                </div>

                <div className="imageSection">
                    <div className="comparison">
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/signup/Sign-Up.png" width="100%" height="auto"/>
                                <div className="bulletList">
                                    <BulletPoint
                                        image="/utility/remove.png"
                                        text="User has no skin in the game yet"
                                        error={true}
                                    />
                                    <BulletPoint
                                        image="utility/remove.png"
                                        text="User may not be sold on the value of the product yet because they don’t really understand it yet"
                                        error={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="compItem">
                            <div className="imageSection">
                                <img className="imgStyle" src="/signup/Zoc-Doc.png" width="100%" height="auto"/>
                                <div className="bulletList">
                                    <BulletPoint
                                        image="/utility/check.png"
                                        text="First action of searching on a search bar requires much less commitment than signing up and giving your email"
                                    />
                                    <BulletPoint
                                        image="utility/check.png"
                                        text="You’re more likely to sign up for ZocDoc after it has helped you find an appointment"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Improvements