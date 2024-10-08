import NavBar from "../NavBar"
import MyRole from "../MyRole"
import Warning from "../Warning"
import CaseStudies from "../CaseStudies"
import Banner from "../Banner"


const content = {
    background: "Shot Doctor cards are statistical comparisons between players that are meant to help coaches get actionable insights.",
    problem: "The original Shot Doctor cards were simply cards with long sentences. Without an intuitive visualization, it was difficult for coaches to understand the statistical comparisons being made.",
    lookingBack: [
        ["Don’t Force it", "It’s clear to me now that I was trying to fit way too much information into a small card. As a result the cards look cluttered and are difficult to read."],
        ["Don’t Over-Differentiate", "At the time, I was obsessed with differentiating. While I think it is important for different objects to have different visual patterns,  variations of the same object should have the same patterns.", "In this case, the differentiation between variations of the same object takes away the user’s ability to predict where the different pieces of information will be."],
        ["Use Figma organization tools to enforce visual hierarchy", "I made these designs before I started regularly using Design Systems, Components, and Auto Layout. I can now see how being able to freely move elements around makes it more tempting to break consistencies. "],
    ],
    comparisons: [
        "Team Type #1",
        "Team Type #2",
        "Team Type #3",
        "Player Type #1",
        "Player Type #2",
        "Player Type #3"
    ]
}

function ShotDoctorCardRedesign(props) {
    return (
        <div className="App">
            <NavBar selectedTab="Shot Doctor Cards"/>

            <Banner
                title="Shot Doctor Cards"
                desc="Displaying statistical inefficiencies to help college coaches make more effective adjustments"
                role="Product Designer"
                img="/comparison1.png"
                backgroundColor="#923E01"
                accentColor="#FFCDA8"
                textColor="white"
            />

            <div className="caseStudyContent">
                <Warning
                    icon="/caution.png"
                    title="Caution"
                    desc1="You are about to see designs with a lack of visual hierarchy, spacing, and consistency that may be offensive to some recruiters."
                    desc2="Why include this case study?"
                    desc3="This job at ShotQuality was an important part of my early design journey and I want to showcase the types of problems I was solving and what I have learned."
                />
                <div className="section">
                    <div className="header2"> Background </div>
                    <div className="bigContent"> {content.background} </div>
                </div>
                <MyRole ux={true}/>
                <div className="section">
                    <div className="header2"> Problem with the Original </div>
                    <div className="bigContent"> {content.problem} </div>
                </div>
                <div className="section">
                    {content.comparisons.map((comp, index) => {
                        return (
                            <div className="subSection">
                                <div className="subHeader"> {comp} </div>
                                <img src={"/comparison" + (index + 1) + ".png"} alt="comparison" /> 
                            </div>
                        )
                    })}
                </div>
                <div className="section">
                    <div className="header2"> Looking Back </div>
                    {content.lookingBack.map(key => {
                        return (
                            <div className="subSection">
                                <div className="subHeader"> {key[0]} </div>
                                <div className="bigContent"> {key[1]} </div>
                                {key[2] ? <div className="bigContent"> {key[2]} </div> : null}
                            </div>
                        )
                    })}
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                    <div className="header2"> Other Case Studies </div>
                    <div className="caseStudies">
                        <CaseStudies show={{
                            report: false,
                            signup: true,
                            review: true,
                            cards: true
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShotDoctorCardRedesign