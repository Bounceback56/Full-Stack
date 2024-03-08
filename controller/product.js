const model=require('../model/product')
const Product=model.Product;

exports.createProduct=(req,res)=>{
    req.body.sizes = req.body.sizes.split(",").map(size => size.trim());
    const product=new Product(req.body);
    product.save()
    .then(savedDocument => {
        console.log('Document saved successfully:', savedDocument);
        res.json(savedDocument)
      })
      .catch(error => {
        console.error('Error saving document:', error);
        res.json(error)
      });
}

exports.getallProducts = async (req,res)=>{
    const products= await Product.find()
    res.json(products)
}

exports.getsingleProduct = async (req,res)=>{
    const id=req.params.id;
    const products= await Product.findById(id)
    res.json(products)
}

exports.updatesingleproductalldatawithnewData = async (req,res)=>{
    const id=req.params.id;
    try{
        const product= await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(product);
    }
    catch(err){
        res.status(404).json(err);
    }  
}

exports.updatesingleproductdatawithonlyspecifieddata = async (req,res)=>{
    const id=req.params.id;
    try{
        const product= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(product);
    }
    catch(err){
        res.status(404).json(err);
    } 
}

exports.deletesingleProduct = async (req,res)=>{
    const id=req.params.id;
    try{
        const product= await Product.findOneAndDelete({_id:id})
        res.status(201).json(product);
    }
    catch(err){
        res.status(404).json(err);
    } 
}