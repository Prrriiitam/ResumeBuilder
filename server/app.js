const express=require('express');
const app=express();
const cors = require('cors');
const port=8000;
require("./db/conn");

app.use(cors());
app.use(express.json());



app.use(require("./router/auth"));

app.get('/',(req,res)=>{
    res.send("Hello from backend!!!!!!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });