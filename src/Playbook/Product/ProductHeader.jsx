import React from "react"
import "./ProductHeader.css"

function ProductHeader(props) {
    const {logo, name, index} = props

    return (
        <div className="productHeader">
            <div className="product">
                <img src={logo} alt="logo" className="logo" />
                <div className="header"> {name} </div>
            </div>
            <div className="productNumber">
                <div className="l1" style={{color: "#40483E"}}> PRODUCT </div>
                <div className="b1"> #{index + 1} </div>
            </div>
        </div>
    )
}

export default ProductHeader