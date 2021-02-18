import React from 'react';
import './CommonTable.css';

const HeadCommonTable = props => {
    const {headersName, children} = props;
    return (
        <table className = "head-common-table">
            <thead>
                <tr>
                    {
                        headersName.map((item,index)=>{return (
                            <td className="head-common-table-header-column" key={index}> {item}</td>
                        )})
                    }
                </tr>
            </thead>
            <tbody>
                {
                children
                }
            </tbody>
        </table>
    )
}

export default HeadCommonTable;