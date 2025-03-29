import React from 'react';

const tableData = {
  headers: ["hello", "world"],
  rows: [
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
    [5, 10],
  ],
};

function TableCard() {
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

export { TableCard, tableData };
