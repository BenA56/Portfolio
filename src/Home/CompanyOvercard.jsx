import "./CompanyOvercard.css"

function CompanyOvercard(props) {
    const { company, descriptor, dateRange, current = false } = props

    return (
        <div className="companyOvercard">
            <div className="companyOvercardName">{company}</div>
            <div className="companyOvercardTags">
                <div className="companyOvercardChip">{descriptor}</div>
                <div className="companyOvercardChip">
                    {current ? <span className="companyOvercardDot"></span> : null}
                    {dateRange}
                </div>
            </div>
        </div>
    )
}

export default CompanyOvercard
