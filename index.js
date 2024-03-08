require('dotenv').config()
const express=require('express')
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
const mongoose = require('mongoose');
const cors = require('cors')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}

const server=express()

server.use(cors());
server.use(express.json())
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)

server.listen(process.env.PORT,()=>{
    console.log("server started")
})