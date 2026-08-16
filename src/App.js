import React from "react"
import './App.css';
import Profile from "./Home/Profile";
import HomeCaseStudies from "./Home/HomeCaseStudies";


function App() {
  return (
    <div >
      <div className="background">
        <div className="home-layout">
          <Profile />
          <HomeCaseStudies />
        </div>
      </div>
    </div>
  );
}

export default App;
