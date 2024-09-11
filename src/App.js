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
        <div className='header'> Hi, I'm Ben Arteaga.  </div>
        <div className='bigContent' style={{maxWidth: "700px"}}> I'm a <b>Product Designer</b> with a Computer Science degree. After 2.5 years spent designing and building a personalized breast cancer report ... I eagerly await my next challenge. </div>
        <div className='header2'> Check Out My Work</div>
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
