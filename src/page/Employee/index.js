import React from 'react'
import MyTable from '../../components/MyTable/SubComponents'
import Header from '../../components/Header'

const demoData = [
    {
        id: 'emp1',
        fullName: 'Nguyen Van A',
        birthYear:1999,
        gender: 1,
        salary: 1000
    },
    {
        id: 'emp2',
        fullName: 'Nguyen Van B',
        birthYear:1995,
        gender: 1,
        salary: 1500
    },
    {
        id: 'emp3',
        fullName: 'Nguyen Van C',
        birthYear:1999,
        gender: 0,
        salary: 1500
    },
    {
        id: 'emp4',
        fullName: 'Nguyen Van D',
        birthYear:1998,
        gender: 1,
        salary: 700
    },
    {
        id: 'emp4',
        fullName: 'Nguyen Van E',
        birthYear:2000,
        gender: 0,
        salary: 400
    },
]

const Employee = () => {
    const columns = [
        {   
            title: 'ID',
            keyData: 'id'
        },
        {
            title: 'Ho va ten',
            keyData: 'fullName',
            render: (_,value) => {
                return <b>{value}</b>
            }
        },
        {
            title: 'Năm sinh',
            keyData: 'birthYear'
        },
        {
            title: 'Gioi tinh',
            keyData: 'gender',
            render: (_,value) => {
                let sexrStr = null , color = null;
                if({value} === 1){
                    return sexrStr = "Female"
                } else if({value} === 0){
                    return sexrStr = "Male"
                }
                
                return <div>{sexrStr}</div>
            },
        },
        {
            title: 'Luong',
            keyData:'salary'
        },
        {
            title:'Thao tac',
            render:(row) => {
                return <button onClick={() => alert(row)}>Edit</button>
            }
        }
]
  return (
    <MyTable data={demoData} columns={columns}/>
  )
}

export default Employee