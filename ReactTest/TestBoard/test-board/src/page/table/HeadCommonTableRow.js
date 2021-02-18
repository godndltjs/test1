import React from "react";

const HeadCommonTableRow = ({children}) => {
    return (
        <tr className = "head-common-table-row">
            {
                children
            }
        </tr>
    )
}

export default HeadCommonTableRow;