import NavBar from "../NavBar"
import MyRole from "../MyRole"
import CaseStudyHeader from "../CaseStudyHeader"

const content = {
    background: "In order to generate a personalized breast cancer report for our users, they must grant us access to their electronic health records during the sign up process.",
    problemsWithOriginal: [
        "Users are not familiar with the concept of connecting third party apps to their healthcare records. This increases the likelihood that a user will give up in anticipation of a difficult sign up process.",
        "Locations within hospitals within health systems. How is the user supposed to know which one has their electronic medical records?"
    ],
    keysToSuccess: [
        "Throughout the design process, I did many rounds of 5 second testing in order to make sure that users would be able to understand each screen in just a few seconds.",
        "Doing this forced me to limit each screen to 1-2 concepts. Better to have many simple screens than a few complicated screens.",
        "We manually went through all of the health systems in our database and added all of the hospitals that are contained by each one.",
        "Mapping these connections is what allows for a user to search for “Memorial Hospital” and get pointed to “HCA South Atlantic”, the organization that owns Memorial Hospital and stores the records of its patients.",
        "Fuzzy Search. Partial Matching. Search Indexes. I implemented all of the juicy details needed for an efficient search that is forgiving to almost-correct searches.",
        "Imagine the user searches for “Michigan”. Do they need to see a result for every location in the the Michigan Medicine network? No.",
        "That’s why I wrote an algorithm to pair down redundant search results so that the user doesn’t get overwhelmed choosing between things that aren’t actually different."
    ],
    userFlow: [
        ["Free Preview", "It’s very important that the user understands what they are getting from this process: a free preview to help get them into the product as quick as possible"],
        ["Create Account", "Standard account creation screen with improved details such as a more distinct active state, icons for each field, and a reduced opacity to the Sign Up button until they fill out the form"],
        ["Personalize Your Report", "Educating the user with a simple graphic so that they will have a general understanding of why they need to grant access to their health records"],
        ["Empty State", "Starting with an empty state sets up the expectation that the space will soon be filled with a connected system, and perhaps even multiple."],
        ["Empty Search Screen", "Reminds the users that they can search on different levels of the health system to find where their records are stored"],
        ["Search Results", "Clearly differentiates the different types of search results (location, hospital, health system) and nudges the user to tap on the correct result to continue"],
        ["Redirection Prep", "By forcing the user to click through the instructions, it is more likely that they will be prepared when they leave our site to grant access to their records"],
        ["Success Screen", "Clearly indicates that they have successfully connected their system and gives them the option to add another or finish and close the modal"],
        ["Accuracy", "We found that users appreciate the transparency so they know exactly why they have to wait to get their report. They also tend to appreciate the human touch of the manual review"]
    ]
}

function SignUpRedesign(props) {
    return (
        <div className="App">
            <NavBar selectedTab="Sign Up Redesign"/>
            <div className="caseStudyContent">
                <CaseStudyHeader
                    logo="/signup.png"
                    name="Sign Up Redesign"
                    desc="Increasing the likelihood that a user will connect to their electronic health records"
                    type="full"
                    company="Yerbba"
                />
                <div className="section">
                    <div className="header2"> Background </div>
                    <div className="bigContent"> {content.background} </div>
                </div>
                <MyRole ux={true} frontEnd={true} backEnd={true}/>
                <div className="section">
                    <div className="header2"> Problems with Original Process </div>
                    <div className="subSection">
                        <div className="subHeader"> Lack of Understanding </div>
                        <div className="bigContent"> {content.problemsWithOriginal[0]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> The Russian Doll Effect </div>
                        <div className="bigContent"> {content.problemsWithOriginal[1]} </div>
                    </div>
                </div>
                <div className="section">
                    <div className="header2"> Keys to Success </div>
                    <div className="subSection">
                        <div className="subHeader"> 5 Second Testing </div>
                        <div className="bigContent"> {content.keysToSuccess[0]} </div>
                        <div className="bigContent"> {content.keysToSuccess[1]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> Brute Force </div>
                        <div className="bigContent"> {content.keysToSuccess[2]} </div>
                        <div className="bigContent"> {content.keysToSuccess[3]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> Full-Text Search </div>
                        <div className="bigContent"> {content.keysToSuccess[4]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> Pairing Algorithm </div>
                        <div className="bigContent"> {content.keysToSuccess[5]} </div>
                        <div className="bigContent"> {content.keysToSuccess[6]} </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                    <div className="header2"> Final User Flow </div>
                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "40px"}}>
                        {content.userFlow.map((step, index) => {
                            return (
                                <div style={{display: "flex", flexDirection: "column", gap: "20px", width: "390px"}}>
                                    <img src={"/frame" + index + ".png"} width="390px" height="844px"/>
                                    <div className="subHeader"> {step[0]} </div>
                                    <div className="bigContent"> {step[1]} </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpRedesign