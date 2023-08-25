import React from 'react'

const TableCell = ({col,row}) => {
  const value = col.keyData ? row[col.keyData] : null

  return (
    <td>
      {
        // {value}
        col.render ? col.render(row) : value
      }
    </td>
  )
}

export default TableCell