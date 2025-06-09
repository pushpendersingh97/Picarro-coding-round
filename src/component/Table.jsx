import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useState } from "react";

const Table = ({ rows, columns }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
  });

  const handleSort = (columnId) => {
    if (sortConfig.key === columnId) {
      if (sortConfig.direction === "asc") {
        setSortConfig({ key: columnId, direction: "desc" });
      } else if (sortConfig.direction === "desc") {
        setSortConfig({ key: null, direction: null });
      } else {
        setSortConfig({ key: columnId, direction: "asc" });
      }
    } else {
      setSortConfig({ key: columnId, direction: "asc" });
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortConfig.key || !sortConfig.direction) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <table className="bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr>
          {columns.map((column, index) => {
            const isSorted = sortConfig.key === column.id;
            return (
              <th
                key={index}
                className="px-4 py-2 border-b border-gray-200 cursor-pointer select-none"
                onClick={() => column.sortable && handleSort(column.id)}
              >
                <div className="flex items-center">
                  <span>{column.label}</span>
                  {column.sortable && (
                    <span className="ml-2 text-gray-500">
                      {isSorted && sortConfig.direction === "asc" && (
                        <ArrowDownNarrowWide />
                      )}
                      {isSorted && sortConfig.direction === "desc" && (
                        <ArrowUpNarrowWide />
                      )}
                      {!isSorted && <ArrowUpNarrowWide className="invisible" />}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
          >
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2 border-b border-gray-200">
                {row[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
