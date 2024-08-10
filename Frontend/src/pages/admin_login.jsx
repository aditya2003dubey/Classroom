import React, { useState } from 'react'
import "./login.css"
import { useForm } from "react-hook-form"
import { redirect } from 'react-router-dom'

function admin_login() {
 const [notice,setNotice] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onSubmit (data){
    console.log(data)
    const result = await fetch ("http://localhost:3000/admin_login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        const response = await result.json();
        if(response === true){
        window.location.href='/admin';
        }
        else{
          setNotice(true)
        }
    }

  

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
    {/* <Redirect to={"/admin"} /> */}
    
    <div class="login-container">
        <h2>Admin Login</h2>
        <p>{notice === true && "Invalid Crendials"}</p>
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
    </div>
  )
}

export default admin_login
