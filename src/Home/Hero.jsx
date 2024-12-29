import "./Hero.css"

function Hero(props) {
    return (
        <div className="hero-layout">
            <img className="notebook" src="/home/Notebook.svg" alt="notebook"/>
            <div className="textWrapper">
                <div className="h1">
                    <span> Wrangling </span>
                    <span className="h1 dashBorder">complex</span>
                    <span> problems into </span>
                    <span className="green-gradient"> seamless </span>
                    <span> experiences </span>
                </div>
            </div>
            <div className="b1 name-title"> Ben Arteaga | Product Design </div>
        </div>
    )
}

export default Hero
