import "./CaseStudy.css"
import CompanyTag from "./Tags/CompanyTag"
import TypeTag from "./Tags/TypeTag"
import { Outlet, Link } from "react-router-dom";

function CaseStudy(props) {
    const {name, logo, desc, type, company} = props

    return (
        <Link className="card" to={`/` + name.split(" ").join("")}>
            <img src={logo} alt="name" width="100px" height="100px"/>
            <div className="detailsWrapper">
                <div className="title"> {name} </div>
                <div className="desc"> {desc} </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "20px"}}>
                    <TypeTag type={type} white={true}/>
                    <CompanyTag company={company} />
                </div>
            </div>
        </Link>
    )
}

export default CaseStudy