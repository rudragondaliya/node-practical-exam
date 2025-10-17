const Product = require("../models/product");

module.exports.addProduct=async(req,res)=>{
    try {
        console.log(req.body);
        await Product.create(req.body);
        console.log("product Added SuccessFully..");
        return res.redirect('/create')
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports.getProducts=async(req,res)=>{
    try {
        let products = await Product.find({});
        return res.render('./pages/tables',{products})
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.deleteProduct=async(req,res)=>{
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id)
        console.log("Product Deleted..");
        return res.redirect('/tables')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.updateProduct=async(req,res)=>{
    try {
        const {id} = req.params;
        await Product.findByIdAndUpdate(id,req.body)
        console.log('Product Updated..');
        return res.redirect('/tables')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.editProduct=async(req,res)=>{
    try {
        const {id} = req.params
        const products = await Product.findById(id)
        return res.render('./pages/edit',{products})
    } catch (error) {
        console.log(error.message);
    }
}