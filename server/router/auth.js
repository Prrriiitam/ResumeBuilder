const express=require("express");
const bcrypt=require("bcrypt");
const router=express.Router();
require("../db/conn");
const User= require("../model/userSchema");


router.get('/',(req,res)=>{
    res.send("Hello from pritam through router");
})

router.post("/api/register", async (req,res)=>{
    const {name, phone, email, password, cpassword} = req.body;
    console.log(req.body);
    if (!name || !phone || !email || !password || !cpassword) {
        return res.status(404).json({ error: "Please fill in all fields properly" });
    }
    try{
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            console.log("User Exist");
            return res.status(404).json({ message: "The entered email is already in use" });
        }
        const user = new User({ name, phone, email,password, cpassword });
        try{
            await user.save();
            console.log("User is successfully saved")
          }
          catch(e){
            console.log(`Error while saving is ${e}`);
    
          }
    
            return res.status(200).json({ message: "Successfully saved" });
    }catch (err) {
        console.error(err);
        return res.status(404).json({ error: "An error occurred while registering" });
    }


})

router.post("/api/login",async (req,res)=>{
    const { email, password} = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(404).json({ error: "Please fill in all fields properly" });
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
        const passMatch=await bcrypt.compare(password,userExist.password);
        
        if (passMatch) {
            return res.status(200).json({ message: "Login Successful" });
        } 
        else{
            return res.status(404).json({ error: "Invalid Login Credentials" });
        }
        }
        else{
            return res.status(404).json({ error: "Sorry You are not registered !! " });

        }
        
    } catch (err) {
        console.log(err);
        return res.status(404).json({ error: "Internal Server Error" });
    }

})

router.get("/api/register",(req,res)=>{
    res.json("Hello from register backend")
})
module.exports = router;