import "./ImagePlaceholder.css"

function ImagePlaceholder(props) {
    const { label } = props

    return (
        <div className="imgPlaceholder imgStyle">
            <div className="l1 imgPlaceholderLabel">{label}</div>
        </div>
    )
}

export default ImagePlaceholder
