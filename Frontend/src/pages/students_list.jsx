import React from 'react'
import DataTable from 'react-data-table-component';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import "./students_list.css"

function students_list() {
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
          name:"Roll No",
          selector:row=>row.rollno,
          sortable:true
        },
        {
          name:"Class",
          selector:row=>row.class,
          sortable:true
          },
          {
            name:"Classroom",
            selector:row=>row.classroom_name,
            sortable:true
            },
        
    ]
    const[records,setRecords] = useState([{}]);

    useEffect(() => {
      async function data (){
      let newData = await fetch ("http://localhost:3000/students_list");
      let res = await newData.json();
      setRecords(res);
      }
      data();
    },[])

  return (
    <div>
        <div className='table'>
          <h1>Students List</h1>
      <DataTable
      // customStyles={customStyles}
      columns={columns}
      data={records}
      fixedHeader
      pagination
      selectableRowsHighlight
      highlightOnHover

      ></DataTable>
    </div>
      
      
    </div>
  )
}

export default students_list
