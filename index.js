require('dotenv').config()
const express=require('express')
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}

const server=express()

server.use(cors());
server.use(express.json())
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

server.listen(process.env.PORT,()=>{
    console.log("server started")
})