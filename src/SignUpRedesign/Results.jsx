import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"
import "./Results.css"

function Results(props) {
    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">

                {/* Hero */}
                <div className=".header">
                    <div className="subSection">
                        <SectionHeader
                            label="Results"
                            title="It's all relative"
                        />
                    </div>

                    {/* 10% */}
                    <div className="subSection">
                        <div className="bigNumber">
                            <div className="h1"> 10% </div>
                            <div className="numUnderline"></div>
                        </div>
                        <div className="content center" style={{width: "60%"}}>Based off of data from a Google Analytics funnel that I built, roughly 10% of users that started the new sign up process connected to their records and got their report</div>
                    </div>
                </div>

                {/* illustration */}
                <img className="funnelIll" src="/signup/Funnel.svg" alt="funnel" width="100%" height="auto" />

                {/* True number */}
                <div className="subSection alignLeft">
                    <div className="h3">The true number was more like 33% ...</div>
                    <div className="content">... if you factor out people that never had a chance of connecting to their system (anyone outside the U.S. or outside of Epic and Cerner)</div>
                </div>

                {/* True number */}
                <div className="subSection alignLeft">
                    <div className="h3">But that still doesn’t account for ...</div>
                    <div className="content">... half of the users dropping off at the sign up page. That must be a design issue.</div>
                </div>

                {/* True number */}
                <div className="subSection alignLeft">
                    <div className="h3">I wish I would have ...</div>
                    <div className="content">... documented the numbers before starting this project. I’m fairly certain that the new sign up process was better due to all the usability testing I did. And I don’t need any analytics to know that the search results were far more flexible. But I can’t prove it. And I don’t know how much better.</div>
                </div>

            </div>
        </div>
    )
}

export default Results