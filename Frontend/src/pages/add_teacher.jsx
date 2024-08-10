import React from 'react'
// import "./login.css"
import { useForm } from "react-hook-form"

function add_teacher() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function onSubmit (data){
    console.log(data)
    const result = await fetch ("https://classroom-backend-j53v.onrender.com/add_teacher",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        const response = await result.text();
        window.location.href='/teachers_list';
        console.log(response);
    }

  

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>
    <div class="login-container">
        <h2>Add Teacher</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="name" {...register("name")} />
      <input defaultValue="email" {...register("email")} />
      <input defaultValue="password" {...register("password")} />
      <input defaultValue="branch" {...register("branch")} />
      <input defaultValue="classroom" {...register("classroom")} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("roll_no", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>

    </div>
    </div>
  )
}

export default add_teacher
