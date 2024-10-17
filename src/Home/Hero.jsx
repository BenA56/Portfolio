import "./Hero.css"

function Hero(props) {
    return (
        <div className="heroLayout">
            <img className="notebook" src="/home/Notebook.svg" alt="notebook" width="900px" height="auto"/>
            <div className="h1"> I’m Ben, a Product Designer who wrangles
            <span className="h1 dashBorder"> complex </span>
            problems into seamless experiences </div>
        </div>
    )
}

export default Hero
