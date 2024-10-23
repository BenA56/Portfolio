import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function NextUp(props) {
    const {image, title, desc, link} = props
    return (
        <div className="container">
            <div className="imgLabel"> Next Project ~ </div>
            <a className="nextCaseStudy">
                <img className="nextUpImage" src={image} alt="case" />
                <div className="h2"> {title} </div>
                <div className="content"> {desc} </div>
                
            </a>
        </div>
    )
}

export default NextUp