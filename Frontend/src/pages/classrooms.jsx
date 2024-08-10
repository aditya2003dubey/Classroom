import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import "./students_list.css"
import { useForm } from "react-hook-form"

function classrooms() {
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
    const [records, setRecords] = useState([{}]);
    const [classe, setClasse] = useState([{}]);
    const [id, setId] = useState("");
    const [form, setForm] = useState(false)

    function truee() {
        setForm(true)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {
        const result = await fetch(`https://classroom-backend-j53v.onrender.com/add_student/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const response = await result.text();
        console.log(response);
        setForm(false);
        window.location.href='/classrooms';
    }

    useEffect(() => {
        async function data() {
            let newData = await fetch("https://classroom-backend-j53v.onrender.com/classrooms");
            let res = await newData.json();
            setClasse(res);
            console.log(res);
        }
        data();
    }, [])
    // function handleFilter(event) {
    //     const newData = records.filter(row => {
    //         return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    //     })
    //     setRecords(newData)
    // }

    async function calling(e) {
        let newData = await fetch(`https://classroom-backend-j53v.onrender.com/classroom/${e}`);
        let res = await newData.json();
        setRecords(res);
        setId(e);
        console.log(e)
        console.log(res);
    }
    return (
        <div>
            <div className='classrooms'>
                <div className='student-classroom'>
                    <h1>Classroom List <Link to={"/add_classroom"} className="btn btn-primary">Add</Link></h1>
                    <div>
                        {classe.map((item, index) => {
                            return (
                                <div key={index} onClick={(() => calling(item._id))} >
                                    <div class="carding ">
                                        <div class="">
                                            <div class="">
                                                <h3 class="">Classroom Name: {item.name}</h3>
                                                <h4 className=''>Class Teacher: {item.teacher_name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                        )}

                    </div>
                </div>


                <div className='student-list'>
                    <h1>Students List </h1>
                    <a href="/" className='btn btn-primary'>Home</a>
                    <DataTable
                        columns={columns}
                        data={records}
                        fixedHeader
                        pagination
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <div className='btns'>
                                <a href="#form" onClick={truee} className='btn btn-primary'>New</a>
                
                            </div>
                        }

                    ></DataTable>
                </div>
            </div>

           

            {form == true &&

                <div class="login-container" id='form'>
                    <h2>Add Student</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className='form-label'>Name</label>
                        <input id='name' className='form-control' {...register("name")} />
                        {errors.name && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="email" className='form-label'>Email/Username</label>
                        <input id='email' className='form-control' {...register("email")} />
                        {errors.email && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="password" className='form-label'>Password</label>
                        <input id='password' className='form-control'{...register("password")} />
                        {errors.password && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="classroom" className='form-label'>Class</label>
                        <input id='classroom' className='form-control' {...register("classroom")} />
                        {errors.classroom && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="classroom_name" className='form-label'>Classroom Name</label>
                        <input id='classroom_name' className='form-control'{...register("classroom_name")} />
                        {errors.classroom_name && <span>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="roll_no" className='form-label'>Roll No</label>
                        <input id='roll_no' className='form-control'{...register("roll_no")} />
                        {errors.roll_no && <span>This field is required</span>}
                        </div>
                        
                        

                        <input type="submit" className='btn btn-primary' />
                    </form>

                </div>
            }
        </div>
    )
}

export default classrooms
