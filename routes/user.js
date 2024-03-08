const express=require('express')
const userController=require('../controller/user')

const router=express.Router()

router
    .get('/',userController.getallProducts)
    .get('/:id',userController.getsingleProduct)
    .post('/',userController.createProduct)
    .put('/:id',userController.updatesingleproductalldatawithnewData)
    .patch('/:id',userController.updatesingleproductdatawithonlyspecifieddata)
    .delete('/:id',userController.deletesingleProduct)

exports.router=router