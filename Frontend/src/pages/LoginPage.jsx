import React from 'react'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div className='mt-5'>
      <div class="row  row-cols-1 row-cols-md-3 g-4 mx-5">

<Link to={"/admin_login"}>
  <div class="col ">
    <div class="card text-bg-primary ">
      <div class="card-body">
        <h3 class="card-title">Admin</h3>
      </div>
    </div>
  </div>
  </Link>

  <Link to={"/teacher"}>
  <div class="col ">
    <div class="card text-bg-primary">
      <div class="card-body">
        <h3 class="card-title">Teacher</h3>
      </div>
    </div>
  </div>
  </Link>

<Link to={"/student"}>
  <div class="col">
    <div class="card text-bg-primary">
      <div class="card-body">
        <h3 class="card-title">Student</h3>
      </div>
    </div>
  </div>
  </Link>

</div>
    </div>
  )
}

export default LoginPage
