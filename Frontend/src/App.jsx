import React from 'react'
import Home from './pages/home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AdminLogin from './pages/admin_login.jsx';
import Admin from './pages/admin.jsx';
import Teacher from './pages/teachers.jsx';
import Student from './pages/students.jsx';
import TeacherList from './pages/teachers_list.jsx'
import StudentList from './pages/students_list.jsx'
import AddStudent from './pages/add_student.jsx'
import AddTeacher from './pages/add_teacher.jsx'
import Classrooms from './pages/classrooms.jsx'
import AddClassroom from './pages/add_classroom.jsx'
import "./App.css"
import {useState,useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>,
    },
    {
      path: "/loginpage",
      element: <LoginPage />,
    },
    {
      path: "/admin_login",
      element: <AdminLogin/>,
    },
    {
      path: "/admin",
      element: <Admin/>,
    },
    {
      path: "/teacher",
      element: <Teacher/>,
    },
    {
      path: "/student",
      element: <Student/>,
    },
    {
      path: "/admin/students_list",
      element: <StudentList/>,
    },
    {
      path: "/teachers_list",
      element: <TeacherList/>,
    },
    {
      path: "/add_student",
      element: <AddStudent/>,
    },
    {
      path: "/add_teacher",
      element: <AddTeacher/>,
    },
    {
      path: "classrooms",
      element: <Classrooms/>,
    },
    {
      path: "add_classroom",
      element: <AddClassroom/>,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
