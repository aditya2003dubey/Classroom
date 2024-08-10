import React from 'react'
import './teacher.css'
import { Link } from 'react-router-dom'
import "./login.css"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import DataTable from 'react-data-table-component';

function teachers() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true

        },
        {
            name: "Password",
            selector: row => row.password,
            sortable: true
        },
        {
            name: "Roll No",
            selector: row => row.rollno,
            sortable: true
        },
        {
            name: "Class",
            selector: row => row.class,
            sortable: true
        },
    ]
    const [alert,setAlert] = useState(false)
    const [res,setRes] = useState([""])
    const[classe,setClasse]= useState([""])
    const[truee,setTruee] = useState(false);
    const id = res[0].classroom;

    function logout(){
        window.location.href='/teacher';
    }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onSubmit (data){
    console.log(data)
    const result = await fetch ("http://localhost:3000/teacher_login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        const response = await result.json();
        if(response == false){
            // alert("Invalid Credentials");
            setAlert(true)
        }
        else{
        console.log(response);
        setRes(response);
        setTruee(true)
        }
    }

        async function data() {
            let newData = await fetch(`http://localhost:3000/classroom_student/${id}`);
            let res = await newData.json();
            setClasse(res);
            console.log(res);
        }
  return (
    <div>
    <div class="sidebar">
        <div class="logo">
            <h2>Teacher </h2>
        </div>
        <ul class="nav-links">
            <li><a href="#dashboard" class="active">Dashboard</a></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="#assignments">Assignments</a></li>
            <li><button onClick={data} className='btn btn-primary'>view student</button></li>
            {truee == false &&
            <li><a href="#login">Login</a></li>}
            {truee == true && 
             <li><button onClick={logout} className='btn btn-primary'>Logout</button></li>
}
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h2>Welcome, {res[0].name}</h2>
            <div className="user-info">
                <p>Welcome, [Teacher Name]</p>
            </div>
        </header>

        

        <section class="tables">
            <div class="table-container" id='student'>
                <h3>Students List</h3>
                <DataTable
                        columns={columns}
                        data={classe}
                        fixedHeader
                        pagination
                        selectableRowsHighlight
                        highlightOnHover

                    ></DataTable>
            </div>
        </section>
    </div>
{truee == false &&
    <div class="login-container " id='login' >
        <h5>{alert === true && <span>Invalid Crendials</span>}</h5>
        <h2>Teacher Login</h2>
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

export default teachers
