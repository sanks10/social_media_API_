const router = require("express").Router();
const User = require("../models/user")

router.get("/register", async(req,res)=>{
    const user = await new User ({
        username:"xyz",
        email:"hulululu@gmail.com",
        password:"1234777"
    })

    await user.save();
    res.send("User Authentication");
});

module.exports = router;
