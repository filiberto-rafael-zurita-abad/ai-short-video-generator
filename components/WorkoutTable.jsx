import React, { useState, useMemo } from 'react';

const WorkoutTable = ({ headers, rows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const pageSize = 5;

  const sortedRows = useMemo(() => {
    if (!sortColumn) return rows;

    const sorted = [...rows].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * (sortOrder === 'asc' ? 1 : -1);
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * (sortOrder === 'asc' ? 1 : -1);
      }

      return String(aValue).localeCompare(String(bValue)) * (sortOrder === 'asc' ? 1 : -1);
    });

    return sorted;
  }, [rows, sortColumn, sortOrder]);

  const filteredRows = useMemo(() => {
    const lowerCaseFilter = filterText.toLowerCase();
    return sortedRows.filter(row =>
      headers.some(header => {
        const cellValue = row[headers.indexOf(header)];
        return String(cellValue).toLowerCase().includes(lowerCaseFilter);
      })
    );
  }, [filterText, headers, sortedRows]);

  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredRows.slice(startIndex, startIndex + pageSize);
  }, [currentPage, filteredRows, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

 const handleSort = (index) => {
    if (sortColumn === index) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else if (sortOrder === 'desc') {
        setSortOrder(null);
      } else {
        setSortOrder('asc');
      }
    } else {
      setSortColumn(index);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (index) => {
    if (sortColumn !== index) return null;
    return sortOrder === 'asc' ? '▲' : '▼';
  };

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Filter table..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <table className="min-w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort(index)}
              >
                {header} {getSortIcon(index)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                  {row[headers.indexOf(header)]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkoutTable;
