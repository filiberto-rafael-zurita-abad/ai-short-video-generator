import React from 'react';

export default function Table({ tableData }) {
    return (
        <table>
            <thead>
                <tr>
                    {tableData.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, index) => (
                            <td key={index}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
