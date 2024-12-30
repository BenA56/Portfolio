import "./CaseStudy.css"
import { Link } from "react-router-dom";

function CaseStudy(props) {
    const { img, title, desc, page } = props

    return (
        <Link className="case" to={`/${page}`}>
            <img className="caseImage" src={img} alt="screenshot" width="90%" height="auto"/>
            <div className="caseDescription">
                <div className='h2 left'> {title} </div>
                <div className='content'>{desc}</div>
                <div className="caseSignifier">
                    <div className="readButton">
                        <div className="button" style={{fontSize: "20px", lineHeight: "28px"}}> Read Case Study </div>
                        <img src="/utility/right-arrow.png" className="dark-arrow" alt="arrow" width="20px" height="auto" />
                        <img src="/playbook/arrow.svg" className="white-arrow" alt="arrow" height="20px" width="auto" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CaseStudy