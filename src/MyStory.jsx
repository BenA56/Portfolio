import React from "react"
import SectionHeader from "./library/SectionHeader"
import BulletPoint from "./library/BulletPoint"
import "./MyStory.css"

function MyStory(props) {
    return (
        <div className="storyLayout">

            {/* Basics */}
            <div className="storySection">
                <img className="storyImage" src="/story/My-Story-1.jpg" alt="story" />
                <div className="storyContent">
                    <SectionHeader
                        label="the basics"
                        title="Hi, I’m Ben Arteaga"
                    />
                    <div className="storyPars">
                        <div className="content">Thanks for checking out my work. I’ve come a long ways and still have a ton to learn. Here’s how I got to where I am now.</div>
                        <BulletPoint
                            image="/utility/graduate.png"
                            text="University of Michigan ‘22, Computer science"
                        />
                        <BulletPoint
                            image="/utility/suitcase.png"
                            text="Last worked for Yerbba, 2022 - 2024"
                        />
                        <BulletPoint
                            image="/utility/location.png"
                            text="Based in Ann Arbor, Mi"
                        />
                    </div>
                </div>
            </div>

            {/* Discovering Design */}
            <div className="storySection">
                <img className="storyImage" src="/story/My-Story-2.jpg" alt="story" />
                <div className="storyContent">
                    <SectionHeader
                        label="2020"
                        title="Discovering Design"
                    />
                    <div className="storyPars">
                        <div className="content">Coding never felt quite right to me. I didn’t mind it, but there was a certain itch that it didn’t scratch. How something was made didn’t excite me like thinking about what to make.</div>
                        <div className="content">And then one day at a hackathon, I did my first ever “Crazy 8s” exercise where I brainstormed 8 different ideas for the layout of an app in 8 minutes. My mind was blown. </div>
                    </div>
                </div>
            </div>

            {/* Failing Fast */}
            <div className="storySection">
                <img className="storyImage" src="/story/My-Story-3.jpg" alt="story" />
                <div className="storyContent">
                    <SectionHeader
                        label="2021"
                        title="Failing Fast"
                    />
                    <div className="storyPars">
                        <div className="content">With minimal UX Design training, I needed a real-world crash course. So I volunteered to design for two startups.</div>
                        <div className="content">The first was a student pipe-dream that sought to merge investing and fantasy sports. This is where I built my first full-product prototype.</div>
                        <div className="content">The first was a student pipe-dream that sought to merge investing and fantasy sports. This is where I built my first full-product prototype.</div>
                    </div>
                </div>
            </div>

            {/* Leveling Up */}
            <div className="storySection">
                <img className="storyImage" src="/story/My-Story-4.jpg" alt="story" />
                <div className="storyContent">
                    <SectionHeader
                        label="2022 - 2024"
                        title="Leveling Up"
                    />
                    <div className="storyPars">
                        <div className="content">On Jan 3, 2022 I started my first real design job working as the sole product designer and front-end developer at Yerbba, a small healthcare startup.</div>
                        <div className="content">I learned so many things in these two and a half years. Not only how to build a complicated healthcare product but also how to manage stakeholders, make decisions, and present my work.</div>
                    </div>
                </div>
            </div>

            {/* Leveling Up */}
            <div className="storySection">
                <img className="storyImage" src="/story/My-Story-5.jpg" alt="story" />
                <div className="storyContent">
                    <SectionHeader
                        label="2024 - pres"
                        title="What Now?"
                    />
                    <div className="storyPars">
                        <div className="content">Feeling burnt out and stagnant five months after launching the Yerbba Report, I decided to leave the company in July 2024. I needed clarity on whether this industry was right for me</div>
                        <div className="content">After just a month away from tech (which I spent trying my hand at basketball content creation) I missed it. I missed interviewing users. I missed brainstorming ideas. And most of all I missed looking at the systems that govern our lives and asking “how can we make this better?” </div>
                        <div className="content">So now I’m searching for my next challenge. I want to collaborate. I want to hone my craft as a designer. I want to take a product and make it 1% better everyday. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStory
