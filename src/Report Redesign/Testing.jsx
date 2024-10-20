import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"


function Testing(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Testing"
                        title="Ironing out the wrinkles"
                        center={true}
                    />
                    <div className="content center">Once I had each feature designed, I wanted to test the product as one being. By the time I had run 4 cycles of testing and improving on my fully dynamic prototype, the product was ready for developer hand-off (which was to myself).</div>
                </div>

                {/* Building Dynamic Prototype */}
                <div className="subSection">
                    <div className="h3">Building a Dynamic Prototype</div>
                    <div className="content center"> At the time, Figma had not released their dynamic prototyping features. So I found an alternative.  </div>
                    <div className="content center"> In the span of three weeks, I learned how to use Protopie to store variables and create dynamic flows. This was important because I wanted testers to feel like they were actually using the product. For example, when they submitted a question in the Ask Yerbba feature, I wanted them to go and find where that question lives in the report. </div>
                </div>

                {/* Testing Web and Mobile */}
                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3">Testing Web and Mobile</div>
                        <div className="content center"> I did 3 rounds of testing with a mobile prototype and 1 round with a web prototype. These tests consisted of three types of tasks. </div>
                        <BulletPoint
                            image="/utility/explore.svg"
                            text="Explore - First I told each tester to freely explore their report. I wanted to see what they would discover naturally without being directed by tasks."
                        />
                        <BulletPoint
                            image="/utility/find.svg"
                            text="Find - I asked testers to find certain bits of information that would be important to breast cancer patients. "
                        />
                        <BulletPoint
                            image="/utility/task.svg"
                            text="Perform - I also asked testers to perform actions in the report, such as saving action items or thinking of a question they have and submitting it."
                        />
                    </div>
                    <div className="imageLayout">
                        <img className="imgStyle bigImage" src="/report/Miro.svg" alt="testing" />
                        <div className="imgLabel"> For each round I took notes on the UserBrain recordings, and then grouped the notes to create themes </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testing