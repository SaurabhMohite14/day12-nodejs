import express from "express";

//intializing the express
const app=express();




app.get("/users/",(req,res)=>{
    res.json({});
});
//handling the client Request/
//http://localhost:6000/
//1 api type =get()/
app.get("/",function(req,res){
    let list=[];
   let user1={id:1,name:"Saurabh"};
   list.push(user1);
   

   //express part we use for return response/

   res.json(list);
});

app.get("/users/:id",(req,res)=>{
    let user ={
        id:req.params.id,
        user:"saurabh"
        
    }
    res.json(user);
})



app.get("/posts/",(req,res)=>{
 let list=[];
 let post={
    id:1.
    
 }
})

//make the post method dynamic refers user/:id//





//Starting the server
app.listen(4000);