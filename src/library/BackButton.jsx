import { Link } from "react-router-dom"
import "./BackButton.css"

function BackButton(props) {
    const {} = props

    return (
        <Link to="/Summary" className="backButton">
            <img src="/utility/arrow-left.svg" alt="arrow" width="24px" height="auto" />
            <div className="button"> Back </div>
        </Link>
    )
}

export default BackButton