import "./RespCaseStudy.css"

function RespCaseStudy(props) {
    const {img1, img2, img3, title, desc} = props

    return (
        <div className="container">
            <div className="leftCol">
                <img src={img1} alt="yerbba" className="topLeft"/>
                <div className="bottomLeft">
                    <div className="h2"> {title} </div>
                    <div className="content center"> {desc} </div>
                    <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                        <div className="button"> Read Case Study </div>
                        <img src="/utility/Arrow-Right.svg" alt="arrow" width="24px" height="24px" />
                    </div>
                </div>
            </div>
            <div className="rightCol">
                <img src={img2} alt="options" className="topRight" />
                <img src={img3} alt="traits" className="bottomRight" />
            </div>
        </div>
    )
}

export default RespCaseStudy