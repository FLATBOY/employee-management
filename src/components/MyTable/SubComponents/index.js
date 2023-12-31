import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import './style.css'

const MyTable = ({data, columns}) => {
  return (
    <table>
        <thead>
            <TableHead columns={columns} />
        </thead>
        <tbody>
            <TableRow 
            columns={columns} 
            data={data} />
        </tbody>
    </table>
  )
}

export default MyTable