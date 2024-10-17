import "./BulletPoint.css"

function BulletPoint(props) {
    const { image, text, dark } = props

    return (
        <div className="bulletLayout">
            <div className="icon">
                <img src={image} alt="icon" width="24px" height="auto" />
                <div className="underline"></div>
            </div>
            <div className="content"> {text} </div>
        </div>
    )
}

export default BulletPoint