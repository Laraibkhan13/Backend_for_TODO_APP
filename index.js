const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
const cors=require("cors");

app.use(cors());


app.use(express.json());
app.post("/createtodo",async function(req,res){

    const task=req.body;
    const parseTask=createTodo.safeParse(task);

    if(!parseTask.success)
    {
        res.status(411).json({
            msg:"wrong data"
        })
        return
    }
    
    await todo.create({
        title:task.title,
        description:task.description,
        completed:false
    })

    res.json({
        msg:"todo has been created"
    })

})

app.get("/alltodo",async function(req,res){
    
    const list=await todo.find({});

    res.json({
        todo:list
    })



})

app.post("/complete",async function(req,res){
    const updatepayload=req.body;
    const pasrseid=updateTodo.safeParse(updatepayload);

    if(!pasrseid.success)
    {
        res.status(411).json({
            msg:"wrong data"
        })
        return;
    }

    await todo.updateOne({_id:req.body.id},{$set:{completed:true}});

    res.json({
        msg:"task completed"
    })
    
})



app.listen(3000,function(req,res){
    console.log("server started at 3000")
})