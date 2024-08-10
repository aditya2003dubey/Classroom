import React from 'react'
// import "./login.css"
import { useForm } from "react-hook-form"


function add_classroom() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onSubmit (data){
    console.log(data)
    const result = await fetch ("https://classroom-backend-j53v.onrender.com/add_classroom",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        const response = await result.text();
        console.log(response);
        window.location.href='/classrooms';
    }

  

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
    <div class="login-container">
        <h2>Add Classroom</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label htmlFor="name" className='form-label'>Name</label>
      <input  id='name' className='form-control' {...register("name")} />
      {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="teacher_name" className='form-label'>Teacher Name</label>
      <input  id='teacher_name' className='form-control'{...register("teacher_name")} />
      {errors.teacher_name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="time" className='form-label'>Time</label>
      <input  id='time' className='form-control'{...register("time")} />
      {errors.time && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="schedule" className='form-label'>Schedule</label>
      <input  id='schedule' className='form-control'{...register("schedule")} />
      {errors.schedule && <span>This field is required</span>}
      </div>


      <input type="submit" className='btn btn-primary' />
    </form>

    </div>
    </div>
  )
}

export default add_classroom
