import React from 'react'
import './styles.css';

function SearchTable(props) {

    let tableData = props.data

    return (
        <div>
            { tableData.length > 0 ?
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Accomodation Type</th>
                        <th>Accomodation Id</th>
                    </tr>
                    {
                        tableData.length > 0 ? tableData.map(entry => <tr>
                            <td>
                                {entry.id}
                            </td>
                            <td>
                                {entry.userId}
                            </td>
                            <td>
                                {entry.title}
                            </td>
                            <td>
                                {entry.body}
                            </td>
                        </tr>) : null
                    }
                </table> : null
            }
        </div>
    )
}

export default SearchTable
