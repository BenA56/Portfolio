import './App.css';
import NavBar from './NavBar';
import CaseStudies from './CaseStudies';

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
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", height: "190px", width: "190px", overflow: "hidden", marginTop: "48px"}}>
          <img src="/portfolio.jpeg" alt="portfolio" height="300px"/>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "24px"}}>
          <div className='me'> Ben Arteaga |</div>
          <div className="tree"> Product Designer </div>
        </div>
        <div className='bigContent' style={{maxWidth: "700px"}}> I'm a Product Designer with a Computer Science degree. After 2.5 years handling all of the design and front-end work for a small healthcare startup ... I'm looking for a new challenge. </div>
        <a className="bigContent" href="/Ben_Arteaga_Resume.pdf" target="_blank"> <b>My Resume</b> </a>
        <div className='header2'>My Work</div>
        <div className='caseStudies'>
          <CaseStudies show={{
            report: true,
            signup: true,
            review: true,
            cards: true
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
