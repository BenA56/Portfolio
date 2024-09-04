import "./CaseStudy.css"
import CompanyTag from "./Tags/CompanyTag"
import TypeTag from "./Tags/TypeTag"
import { Link } from "react-router-dom";

function CaseStudy(props) {
    const {name, logo, desc, role, company, backgroundColor, textColor, accentColor} = props

    return (
        <Link className="card" to={`/` + name.split(" ").join("")} style={{backgroundColor: backgroundColor}}>
            <img src={logo} alt="name" width="auto" height="140px" style={{borderRadius: "8px", border: `4px solid ${accentColor}`}}/>
            <div className="detailsWrapper">
                <div className="title"> {name} </div>
                <div className="desc"> {desc} </div>
                <div className="desc" style={{color: accentColor}}><b> {role} </b></div>
                <CompanyTag company={company} />
            </div>
        </Link>
    )
}

export default CaseStudy