import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'

function students() {
    const [res,setRes] = useState([""])
    const [alertt,setAlertt] = useState(false)
    const[truee,setTruee] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

function logout(){
    window.location.href='/student';
}

    async function onSubmit (data){
        console.log(data)
        const result = await fetch ("https://classroom-backend-j53v.onrender.com/student_login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            const response = await result.json();
            if(response == false){
                setAlertt(true);
            }
            else{
            // console.log(response);
            setRes(response);
            // setAlert(response)
            setTruee(true);}
            // 
        }
  return (
    <div>
    <div class="sidebar">
        <div class="logo">
            <h2>Student</h2>
        </div>
        <ul class="nav-links">
            <li><a href="#dashboard" class="active">Dashboard</a></li>
            <li><Link to="/">Home</Link> </li>
            <li><a href="#assignments">Assignments</a></li>
            <li><a href="#grades">Grades</a></li>
            <li><a href="#profile">Profile</a></li>
            {truee == false &&
            <li><a href="#login">Login</a></li>}
            {truee == true && 
            <li><button onClick={logout} className='btn btn-primary'>Logout</button></li>
}
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h2>Dashboard</h2>
            <div class="user-info">
                <p>Welcome, [Student Name]</p>
            </div>
        </header>

        <section class="cards">
            <div class="card">
                <h3>Name</h3>
                <p>{res[0].name}</p>
            </div>
            <div class="card">
                <h3>Email</h3>
                <p>{res[0].email}</p>
            </div>
            <div class="card">
                <h3>Password</h3>
                <p>{res[0].password}</p>
            </div>
            <div class="card">
                <h3>Class</h3>
                <p>{res[0].class}</p>
            </div>
        </section>

        <section class="tables">
            <div class="table-container">
                <h3>Recent Assignments</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Assignment</th>
                            <th>Due Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td>Homework 1</td>
                            <td>2024-08-15</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>Lab Report</td>
                            <td>2024-08-18</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>Essay</td>
                            <td>2024-08-20</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>


{truee == false &&
    <div class="login-container " id='login' >
        <h5>{alertt === true && <span>Invalid Credentials</span>}</h5>
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className='col-auto'>
        <label htmlFor="username" className='form-label'>Username</label>
      <input type='text' id='username' className='form-control' {...register("email")} required/>
      {errors.email && <span>This field is required</span>}
      </div>

      <div className='col-auto'> 
        <label htmlFor="password" className='form-label'>Password</label>
      <input type='password' id='password' className='form-control'{...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      </div>

      <input type="submit" className='btn btn-primary'/>
    </form>

    </div>
}
    </div>
  )
}

export default students
