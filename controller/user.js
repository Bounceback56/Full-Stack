const fs=require('fs')
const path = require('path');
const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8'))
const users=data.users;

exports.createProduct=(req,res)=>{
    users.push(req.body)
    res.json(req.body)
}

exports.getallProducts=(req,res)=>{
    res.json(users)
}

exports.getsingleProduct=(req,res)=>{
    const id=+req.params.id;
    const product=users.find(product=>product.id===id)
    res.json(product)
}

exports.updatesingleproductalldatawithnewData=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.findIndex(product=>product.id===id)
    users.splice(productIndex,1,{id:id,...req.body})
    res.status(201).json();
}

exports.updatesingleproductdatawithonlyspecifieddata=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.findIndex(product=>product.id===id)
    const product=users[productIndex]
    users.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
}

exports.deletesingleProduct=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.findIndex(product=>product.id===id)
    users.splice(productIndex,1)
    res.status(201).json();
}