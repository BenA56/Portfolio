import logo from './logo.svg';
import './App.css';
import Companies from './Companies';
import NavBar from './NavBar';
import CaseStudy from './CaseStudy';

export const pageTitle = {
  fontFamily: "Mukta",
  fontSize: "50px",
  lineHeight: "50px",

}

function App() {
  return (
    <div className="App">
      <NavBar selectedTab="Summary"/>
      <div className='page'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", height: "190px", width: "190px", overflow: "hidden"}}>
          <img src="/portfolio.jpeg" alt="portfolio" height="300px"/>
        </div>
        <div className='header'> Hi, I'm Ben Arteaga </div>
        <div className='header2'> A Little Backstory</div>
        <div style={{display: "flex", flexDirection: "column", gap: "20px", width: "570px"}}>
          <div className='bigContent'> I’ve worked as a UX Designer and F-E Developer for three small startups. </div>
          <Companies />
          <div className='bigContent'> Working as a solo UX Designer has taught me a lot . . . </div>
          <div className='bigContent'> but I wonder what I could learn by working with other designers? </div>
          <div className='bigContent'> In my next role . . . </div>
          <div className='bigContent'> I hope to continue converting complex ideas into intuitive experiences, while collaborating with other designers and developers. </div>
        </div>
        <div className='header2'> Check Out My Work</div>
        <div className='caseStudies'>
          <CaseStudy name="Report Redesign" desc="Re-imagining a breast cancer report for better discoverability of key information" logo="/report.png" type="NDA" company="Yerbba"/>
          <CaseStudy name="Sign Up Redesign" desc="Increasing the likelihood that a user will connect to their electronic health records" logo="/signup.png" type="full" company="Yerbba"/>
          <CaseStudy name="AI Manual Review Tool" desc="Allowing for reviewing and editing of AI-generated breast cancer reports" logo="/artificial-intelligence.png" type="full" company="Yerbba"/>
          <CaseStudy name="Shot Doctor Card Redesign" desc="Displaying statistical comparisons in a way that helps coaches take action" logo="/analytics.png" type="full" company="ShotQuality"/>
        </div>
      </div>
    </div>
  );
}

export default App;
