import React from "react"

function TypeTag(props) {
    const {type, white} = props

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "5px"}}>
            {type === "full" ?
                <React.Fragment>
                    {white ?
                    <img src="/book.png" alt="book" width="16px" height="16px" />
                    : <img src="/book_black.png" alt="book" width="24px" height="24px" />
                    }
                    <div> Full Case Study </div>
                </React.Fragment>
            :
                <React.Fragment>
                    {white ?
                    <img src="/eyes.png" alt="eyes" width="16px" height="16px" />
                    : <img src="/eyes_black.png" alt="eyes" width="24px" height="24px" />
                    }
                    <div> Sneak Peak - NDA </div>
                </React.Fragment>
            }
        </div>
    )
}

export default TypeTag
