import "./BulletPoint.css"

function BulletPoint(props) {
    const { image, text, dark, error, caution } = props

    let underlineColor = "#CCE5C5"
    if(dark) {
        underlineColor = "#40483E"
    } else if(error) {
        underlineColor = "#E0BFBF"
    } else if(caution) {
        underlineColor = "#ECE4C3"
    }


    return (
        <div className="bulletLayout">
            <div className="icon">
                <img src={image} alt="icon" width="24px" height="auto" />
                <div style={{backgroundColor: underlineColor, borderRadius: "100px"}}>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="content"> {text} </div>
        </div>
    )
}

export default BulletPoint