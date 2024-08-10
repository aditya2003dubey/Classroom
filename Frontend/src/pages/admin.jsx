import React from 'react'
import { Link } from 'react-router-dom'
import "./admin.css"
import { useState,useEffect } from 'react';

function admin() {
    const [teacher,useTeacher]= useState(0);
    const [student,useStudent]=useState(0)
    useEffect(() => {
        async function data (){
        let newData = await fetch ("http://localhost:3000/teacher");
        let res = await newData.json();
        useTeacher(res.length);
        }
        data();
      },[])

      useEffect(() => {
        async function data (){
        let newData = await fetch ("http://localhost:3000/student");
        let res = await newData.json();
        useStudent(res.length);
        }
        data();
      },[])
  return (
    <div>
    <div class="sidebar">
        <div class="logo">
            <h2>Admin</h2>
        </div>
        <ul class="nav-links">
            <li><a href="#dashboard" class="active">Dashboard</a></li>
            <li><Link to={"/"} className="btn btn-primary">Home</Link></li>
            <li><Link to={"/admin/students_list"}>View Students</Link></li>
            <li><Link to={"/teachers_list"}>Manage Teachers</Link></li>
            <li><Link to={"/classrooms"}>Classrooms</Link></li>
            <li><Link to={"/admin_login"}>Log Out</Link></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h2>Dashboard</h2>
            <div class="user-info">
                <p>Welcome, Admin</p>
            </div>
        </header>

        <section class="cards">
            <div class="card">
                <h3>Total Students</h3>
                <p>{student}</p>
            </div>
            <div class="card">
                <h3>Total Courses</h3>
                <p>10</p>
            </div>
            <div class="card">
                <h3>Total Teachers</h3>
                <p>{teacher}</p>
            </div>
            <div class="card">
                <h3>Pending Requests</h3>
                <p>3</p>
            </div>
        </section>

        <section class="tables">
            <div class="table-container">
                <h3>Recent Student Registrations</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john.doe@example.com</td>
                            <td>Mathematics</td>
                            <td>2024-08-01</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>jane.smith@example.com</td>
                            <td>Science</td>
                            <td>2024-08-02</td>
                        </tr>
                        <tr>
                            <td>Emily Johnson</td>
                            <td>emily.johnson@example.com</td>
                            <td>History</td>
                            <td>2024-08-03</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>

    </div>
  )
}

export default admin
