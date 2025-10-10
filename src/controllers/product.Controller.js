const Product = require("../models/Product.model");
 const getAllProducts = async(req, res) => {
     try{
        const products = await Product.find({ deletedAt: null });
        res.json(products);
     }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
     }
 }
 const getProductById = async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error fetching product" });
    }
 }

 const createProduct = async(req,res)=>{
     try{
        const product= await Product.create(req.body);
        res.status(201).json(product);
     }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error creating product" });
     }
 }

 const updateProduct = async(req,res)=>{
     try{
        const product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
     }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error updating product" });
     }
 }

 const softDeleteProduct = async(req,res)=>{
    try{
        const product= await Product.findByIdAndUpdate(req.params.id,{$set:{deletedAt:new Date()}},{new:true});
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error deleting product" });
    }
 }

 const deleteProduct = async(req,res)=>{
     try{
        const product= await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
     }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error deleting product" });
     }
 }

 const restoreProduct = async(req,res)=>{
     try{
        const product= await Product.findByIdAndUpdate(req.params.id,{$set:{deletedAt:null}},{new:true});
        if(!product){
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
     }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error restoring product" });
     }
 }
 module.exports={getAllProducts,getProductById,createProduct,updateProduct,softDeleteProduct,deleteProduct,restoreProduct};