import React from 'react';
 
export default function Datatable({data}){

    const columns = data[0] && Object.keys(data[0]);
    return (
    <table cellPadding={1} cellSpacing={2} border={1}>
        <thead>
            <tr>{data[0] && columns.map((heading)=><th style={{border: "1px solid black"}}>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row=><tr>
                {
                    columns.map(column => <td style={{border: "1px solid black"}}>{row[column]}</td>)
                }
            </tr>)}
        </tbody>
    </table>
    )
}