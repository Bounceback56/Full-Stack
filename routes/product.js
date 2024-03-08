const express=require('express')
const productController=require('../controller/product')

const router=express.Router()

router
    .get('/',productController.getallProducts)
    .get('/:id',productController.getsingleProduct)
    .post('/',productController.createProduct)
    .put('/:id',productController.updatesingleproductalldatawithnewData)
    .patch('/:id',productController.updatesingleproductdatawithonlyspecifieddata)
    .delete('/:id',productController.deletesingleProduct)

exports.router=router