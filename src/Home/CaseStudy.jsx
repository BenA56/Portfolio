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
                        <div className="button"> Read Case Study </div>
                        <img src="/utility/right-arrow.png" alt="arrow" width="20px" height="auto" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CaseStudy