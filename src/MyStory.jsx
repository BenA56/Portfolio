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
                        title="Hi, I’m Ben"
                    />
                    <div className="storyPars">
                        <div className="content"> I love thinking about how the digital experiences we build shape the world. Nowadays, I'm locked in on becoming the best designer I can be ... but it hasn't always been that way. </div>
                        <div className="content"> As every 20-something can attest to, it takes a lot of twists, turns, and adaptations to figure out your reason to get out of bed every morning. Here's my story. </div>
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
                        <div className="content"> As satisfying as it was to finish each coding project for my Computer Science courses, it always felt like something was missing. </div>
                        <div className="content"> Then one fateful day at a university hackathon, I took a leap and joined the designers instead of the coders. As I put pen to paper sketching wireframe after wireframe, something inside me felt unleashed. So I fed the flame. </div>
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
                        <div className="content">With minimal design training, I needed a real-world crash course. So I spent the first year of my journey volunteering for startups.</div>
                        <div className="content">The first was a student-run startup that sought to merge investing and fantasy sports. This is where I built my first full-product prototype.</div>
                        <div className="content">The second was a basketball analytics company called ShotQuality that had 60+ real college programs as clients. I conducted user interviews with coaches, redesigned the navigation, and designed several new features. </div>
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
                        <div className="content">So now I’m searching for my next challenge. I want to collaborate. I want to hone my craft as a designer. I want to take a product and make it 1% better everyday. Looking for talent? Hit me up. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStory
