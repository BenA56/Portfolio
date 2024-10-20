import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"


function DesignSystem(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Design Sytem"
                        title="Establishing some building blocks to go from lo-fi to hi-fi"
                    />
                    <div className="content">Once I had some general wire frames ironed out, I felt the need for a basic design system. This would speed up further iteration and lock in a visual style to give us a feel for what this would actually look like. I couldn’t afford to spend months or even weeks on it, so I focused on the basics.</div>
                </div>

                {/* Colors */}
                <div className="imageSection alignLeft">
                    <div className="subSection alignLeft">
                        <div className="h3"> Re-purposing existing colors </div>
                        <BulletPoint
                            image="/utility/shades.png"
                            text="I added different shades of each color to use for depth and backgrounds"
                        />
                        <BulletPoint
                            image="/utility/color-balance.png"
                            text="I used the 60/30/10 split to apply colors to the interface in a balanced way"
                        />
                    </div>
                    <img src="/report/Colors.svg" alt="colors" width="333px" height="auto" />
                </div>

                {/* Buttons */}
                <div className="imageSection alignLeft">
                    <div className="subSection alignLeft">
                        <div className="h3"> Adapting Google’s Material UI to feel softer for a caring health app </div>
                        <BulletPoint
                            image="/utility/corner.png"
                            text="I rounded out corners on buttons and containers for a less sharp feel"
                        />
                        <BulletPoint
                            image="/utility/mixed-case.png"
                            text="I used mixed-case to make buttons feel less commanding"
                        />
                    </div>
                    <img src="/report/Buttons.svg" alt="colors" width="333px" height="auto" />
                </div>

                {/* Icons */}
                <div className="imageSection alignLeft">
                    <div className="subSection alignLeft">
                        <div className="h3"> Making stock icons feel high quality by ... </div>
                        <BulletPoint
                            image="/utility/paint-brush.png"
                            text="Customizing the colors with shades of our brand color"
                        />
                        <BulletPoint
                            image="/utility/similarity.png"
                            text="Selecting icons of similar style"
                        />
                    </div>
                    <img src="/report/Icons.svg" alt="colors" width="333px" height="auto" />
                </div>



            </div>
        </div>
    )
}

export default DesignSystem