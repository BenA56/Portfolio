import React, { useState } from "react"
import './App.css';
import Hero from './Home/Hero';
import Navigation from "./Home/Navigation";
import CaseStudy from "./Home/CaseStudy";

function App() {
  const [selected, setSelected] = useState("work")

  return (
    <div >
      <div className='background'>
        <Navigation selected={selected} setSelected={setSelected}/>

        {selected == "work" ?
          <React.Fragment>
          <Hero />
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
          </React.Fragment>
        :
          <div> About Me! </div>
        }
      </div>
    </div>
  );
}

export default App;
