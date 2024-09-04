import './App.css';
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
        <div className='header'> Hi, I'm Ben Arteaga.  </div>
        <div className='bigContent' style={{maxWidth: "700px"}}> I'm a <b>Product Designer</b> with a Computer Science degree. After 2.5 years spent designing and building a personalized breast cancer report ... I eagerly await my next challenge. </div>
        <div className='header2'> Check Out My Work</div>
        <div className='caseStudies'>

          {/* Report redesign case study card */}
          <CaseStudy
            name="Report Redesign"
            desc="Re-imagining a breast cancer report for better discoverability of key information"
            logo="/Summary-Options.png"
            role="Product Designer & F-E Developer"
            company="Yerbba"
            backgroundColor="#1C1C2A"
            accentColor="#A2A5D6"
          />
          <CaseStudy name="Sign Up Redesign" desc="Increasing the likelihood that a user will connect to their electronic health records" logo="/signup.png" type="full" company="Yerbba"/>
          <CaseStudy name="AI Manual Review Tool" desc="Allowing for reviewing and editing of AI-generated breast cancer reports" logo="/artificial-intelligence.png" type="full" company="Yerbba"/>
          <CaseStudy name="Shot Doctor Card Redesign" desc="Displaying statistical comparisons in a way that helps coaches take action" logo="/analytics.png" type="full" company="ShotQuality"/>
        </div>
      </div>
    </div>
  );
}

export default App;
