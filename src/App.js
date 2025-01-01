import React, { useState } from "react"
import './App.css';
import Hero from './Home/Hero';
import Navigation from "./Home/Navigation";
import CaseStudy from "./Home/CaseStudy";
import MyStory from "./MyStory";
// import PlaybookCTA from "./Playbook/PlaybookCTA";

function App() {
  const [selected, setSelected] = useState("work")

  return (
    <div >
      <div className={"background" + (selected === "story" ? " my-story" : "")}>
        <Navigation selected={selected} setSelected={setSelected}/>
        
        {selected === "work" ?
          <React.Fragment>
          <div className="sig-spotlight"></div>
          <div className="test-wrapper">
            <img src="/home/Signature-green.svg" alt="signature" height="48px" width="auto" />
            <Hero />
          </div>
          <div className='caseStudies'>

            <CaseStudy
              img="/report/My-Reports.png"
              title="The Yerbba Report"
              desc="Empowering breast cancer patients to make educated decisions by transforming their medical records into a personazlized report"
              page="BreastCancerReport"
            />

            <CaseStudy
              img="/Manual-Review.png"
              title="AI Manual Review Tool"
              desc="Creating an efficient, flexible tool for manually reviewing AI-generated breast cancer reports"
              page="AIManualReviewTool"
            />

            <CaseStudy
              img="/signup/Yerbba-Signup.png"
              title="EHR Sign Up"
              desc="Creating a trustworthy sign up flow that encourages patients to give access to their electronic health records"
              page="EHRSignup"
            />
          </div>

          {/* Playbook CTA */}
          {/* <PlaybookCTA /> */}
          </React.Fragment>
        : selected === "story" ?
          <MyStory />
        : null
        }
      </div>
    </div>
  );
}

export default App;
