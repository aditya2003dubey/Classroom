const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const student = require('./modals/student.js')
const teacher = require('./modals/teacher.js')
const classroom = require('./modals/classroom.js')
const url = "mongodb+srv://adityadubeypc:oud3L1dhExy2xkA2@cluster0.7nixi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const session = require("express-session");
app.use(bodyParser.json())
const password = "oud3L1dhExy2xkA2"
app.use(cors())

main()
.then(()=>{
    console.log("database working");
})

async function main() {
  await mongoose.connect(url);
}




app.get("/teacher",async(req,res)=>{
    const teachers =await teacher.find();
    res.send(teachers);
})

app.get("/student",async(req,res)=>{
    const students =await student.find();
    res.send(students);
})

app.post("/admin_login",(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    if(email === "principal@classroom.com" && password === "Admin"){
        res.send(true);
        // res.redirect("/admin")
        }
        else{
            res.send(false)
        }
})

app.post("/teacher_login",async (req,res)=>{
    const {email,password} = req.body;
    try{
   await teacher.find({password:password}).then((data)=>{
        if(data[0].email == email && data[0].password == password){
            res.send(data);  
        }
        else{
            res.send(false);
        }
    })
    }
    catch(err){
        res.send(false);
    }
})


app.post("/student_login",async (req,res)=>{
    const {email,password} = req.body;
    try{
   await student.find({password:password}).then((data)=>{
        if(data[0].email == email && data[0].password == password){
            res.send(data);  
        }
        else{
            res.send(false);
        }
    })
    }
    catch(err){
        res.send(false);
    }
})

app.get("/teachers_list",async (req,res)=>{
    const data =await teacher.find().populate({path:"classroom"});;
    res.send(data);
})

app.get("/students_list",async (req,res)=>{
    const data =await student.find().populate({path:"classroom"});
    res.send(data);
})

app.post("/add_student/:id",async (req,res)=>{
    const id =req.params.id;
    console.log(id);
    const {name,email,password,classroom,classroom_name,roll_no} = req.body;
    const data = new student({
        name:name,
        email:email,
        password:password,
        class:classroom,
        rollno:roll_no,
        classroom_name:classroom_name
        })
        data.classroom = id;
        await data.save();
        res.send("Student Added");

})

app.post("/add_teacher",async (req,res)=>{
    const {name,email,password,branch,classroom} = req.body;
    const data = new teacher({
        name:name,
        email:email,
        password:password,
        branch:branch,
        classroom:classroom
        })
        await data.save();
        res.send("Teacher Added");

})

app.get("/classrooms",async (req,res)=>{
    const data =await classroom.find();
    res.send(data);
})

app.post("/add_classroom",async(req,res)=>{
    const {name,teacher_name,time,schedule} = req.body;
    const data = new classroom({
        name:name,
        teacher_name:teacher_name,
        time:time,
        schedule:schedule
        })
        await data.save();
        res.send("Classroom Added");
})

app.get("/classroom/:id",async (req,res)=>{
    const id = req.params.id;
   await student.find({classroom:id}).populate({path: "classroom"}).then((data)=>{
        res.send(data);
        console.log(data)

    })
})

app.get("/classroom_student/:id",(req,res)=>{
    const id = req.params.id;
    student.find({classroom_name:id}).then((data)=>{
        res.send(data); 
    })
})



app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})