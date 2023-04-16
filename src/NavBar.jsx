import React from "react"
import { Link } from "react-router-dom";
import "./NavBar.css"

const tabs = [
    "Summary", "Report Redesign", "Sign Up Redesign", "AI Manual Review Tool", "Shot Doctor Card Redesign"
]

function Tab(props) {
    const {selected, name} = props

    return (
        <div>
            {selected ?
                <div className="tab selected">
                    {name}
                </div>
            :
                <div>
                    <Link className="tab" to={`/` + name.split(" ").join("")}> {name} </Link>
                </div>
            }
        </div>
    )
}

function NavBar(props) {
    const {selectedTab} = props

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", height: "190px"}}>
            {tabs.map(tabName => {
                return (
                    <Tab name={tabName} selected={selectedTab === tabName} />
                )
            })}
        </div>
    )
}

export default NavBar