const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv= require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");


dotenv.config();
//connecting to database
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser : true , useUnifiedTopology : true},)
.then(() => console.log("Successfully connected to mongoDB"))
.catch((err) => console.log(err));

//middleware
app.use(express.json()) //body parser for post request
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute)

//middleware
app.get("/", (req,res)=>{
    res.send("Social media site home")
});
app.get("/users", (req,res)=>{
    res.send("Social media site users")
})



app.listen(600, () =>{
    console.log("backend server in action...");
});
