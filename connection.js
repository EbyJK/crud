// importing mongoose
var mongoose=require('mongoose');
//mongoose is language used by the client and database 
//when both doesnt know the same language to communicate



//connecting with db
//mongoose.connect("connection.string").then().catch()

mongoose.connect("mongodb+srv://ebyjk:atlas1@cluster0.wtupewv.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")

})
// (()=>{} // call back function inside the paranthesis)
.catch(()=>{
console.log(err);

})