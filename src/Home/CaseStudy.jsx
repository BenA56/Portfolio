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
                    <div className="button"> Read Case Study </div>
                    <img src="/utility/Arrow-Right.svg" alt="arrow" width="24px" height="24px" />
                </div>
            </div>
        </Link>
    )
}

export default CaseStudy