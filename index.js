//1.import express
var express=require('express');
require('./connection');
var sampleModel = require('./model');

//2.initialization
var app= express();
//middleware
app.use(express.json());

//api 
//to add data to db
// /add is the api to communicate
app.post('/add',async(req,res)=>{
    try {
        await sampleModel(req.body).save();
        res.send("data added");


        
    } catch (error) {
        çonsole.log(error);
    }
})
//api to view data
app.get('/view',async(req,res)=>{
try{
    var output= await sampleModel.find()
    res.send(output);

}
catch(error){
    console.log(error);


}

})
// api to delete a document
app.delete('/remove/:a',async(req,res)=>{
    console.log(req.params.a)
    try{
        var id= req.params.a
        await sampleModel.findByIdAndDelete(id)
        res.send("data deleted")
    }catch(error){
        console.log(error)

    }
})
// api to update a document
app.put('/edit/:a',async(req,res)=>{
    console.log(req.params.a);
    try{
        var id=req.params.a
        var output= await sampleModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})
    }
    catch(error){
        console.log(error)


    }

})


//port assigning
app.listen('3001',()=>{
    console.log("port is up and running!!!")
})
