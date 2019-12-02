var express=require("express");
var app=express();
var db=require("../db");
 
var connection=db.connect();

app.use(express.json());

app.get("/",(req,res)=>{
    var queryText="select * from ritu";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(err));
        }
    })
})

app.get("/:id",(req,res)=>{
     var id=req.params.id;
    var queryText=`select * from ritu where id=${id}`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(err));
        }
    })
})

app.post("/",(req,res)=>{
    var name=req.body.name;
    var sal=req.body.sal;
    var queryText=`insert into ritu (name,sal) values('${name}',${sal})`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(JSON.stringify(err));
        }
    })
})

module.exports=app;