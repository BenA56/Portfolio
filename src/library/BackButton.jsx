import { Link } from "react-router-dom"
import "./BackButton.css"

function BackButton(props) {

    return (
        <Link to="/" className="backButton">
            <img src="/utility/previous.png" alt="arrow" width="20px" height="auto" />
            <div className="button"> Back </div>
        </Link>
    )
}

export default BackButton