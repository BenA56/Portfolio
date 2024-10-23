import "./Sections.css"
import "./KeyInsight.css"

function KeyInsight(props) {
    const {insight} = props

    return (
        <div className="sectionOuter dark">
            <div className="sectionInner">
                <div className="subSection alignLeft">
                    <div className="keyLayout">
                        <img src="/utility/key.png" alt="key" width="24px" height="auto" />
                        <div className="l1"> Key Insight </div>
                    </div>
                    <div className="b1"> {insight} </div>
                </div>
            </div>
        </div>
    )
}

export default KeyInsight