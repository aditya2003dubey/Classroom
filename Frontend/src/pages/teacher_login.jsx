import React from 'react'
import "./login.css"
import { useForm } from "react-hook-form"
import { useState } from 'react'

function teacher_login() {
  const [res,setRes] = useState("")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onSubmit (data){
    console.log(data)
    const result = await fetch ("https://classroom-backend-j53v.onrender.com/teacher_login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        const response = await result.text();
        console.log(response);
        setRes(response);
    }

  

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
    <div class="login-container " >
        <h5>{res === "Invalid Credentials" && <span>{res}</span>}</h5>
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
    </div>
  )
}

export default teacher_login
