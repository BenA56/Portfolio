import "./App.css"
import CompanyTag from "./Tags/CompanyTag"
import TypeTag from "./Tags/TypeTag"

function CaseStudyHeader(props) {
    const {logo, name, desc, type, company} = props

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "40px", maxWidth: "760px"}}>
            <img src={logo} alt="icon" height="100px" width="100px"/>
            <div className="header"> {name} </div>
            <div style={{fontSize: "32px", lineHeight: "44px"}}> {desc} </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "20px"}}>
                <TypeTag type={type}/>
                <CompanyTag company={company}/>
            </div>
        </div>
    )
}

export default CaseStudyHeader