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
                <div className="label"> PRODUCT </div>
                <div className="number"> {index + 1} </div>
            </div>
        </div>
    )
}

export default ProductHeader