import React from 'react'
import DataTable from 'react-data-table-component';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import "./students_list.css"

function teachers_list() {
    const columns=[
        {
          name:'Name',
          selector:row =>row.name,
          sortable:true
        },
        {
          name:"Email",
          selector:row=>row.email,
          sortable:true
      
        },
        {
          name:"Password",
          selector:row=>row.password,
          sortable:true
        },
        {
          name:"Branch",
          selector:row=>row.branch,
          sortable:true
        },
        {
          name:"Classroom",
          selector:row=>row.classroom,
          sortable:true
        },
    ]
    const[records,setRecords] = useState("");

    useEffect(() => {
        async function data (){
        let newData = await fetch ("https://classroom-backend-j53v.onrender.com/teachers_list");
        let res = await newData.json();
        setRecords(res);
        }
        data();
      },[])
   

   async function handleFilter(event){
        const newData = await records.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    

  return (
    <div>
        <div className='table'>
          <h1>Teachers List</h1>
      <DataTable
      // customStyles={customStyles}
      columns={columns}
      data={records}
      fixedHeader
      pagination
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <div className='btns'>
          <Link to={"/add_teacher"} className="btn btn-primary">New</Link>
        <input type="text"  placeholder='Search...' onChange={handleFilter}/>
        </div>
      }
      ></DataTable>
    </div>
      
    </div>
  )
}

export default teachers_list
