const Table = ({rows, columns}) => {
  return (
    <table>
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className="px-4 py-2 border-b border-gray-200">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                    {columns.map((column, colIndex) => (
                        <td key={colIndex} className="px-4 py-2 border-b border-gray-200">
                            {row[column.id]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table