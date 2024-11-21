const mongoose=require("mongoose");
const bcrypt = require("bcrypt");


const userSchema=new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
});

userSchema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12)
        this.cpassword=await bcrypt.hash(this.cpassword,12)

    }
    next();
})

const User=mongoose.model("User",userSchema);
module.exports=User;
