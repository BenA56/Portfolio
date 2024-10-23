import "./Hero.css"

function Hero(props) {
    return (
        <div className="heroLayout">
            <img className="notebook" src="/home/Notebook.svg" alt="notebook"/>
            <div className="textWrapper">
                <div className="h1">
                    <span> I’m Ben, a Product Designer who wrangles </span>
                    <span className="h1 dashBorder">complex</span>
                    <span> problems into seamless experiences </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
