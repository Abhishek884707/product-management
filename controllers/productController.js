const Product = require("../models/product")

const Category = require("../models/category")

async function handleGetAllProducts(req, res) {
    const allDbProducts = await Product.find({});

    const dtoProducts = [];

    for (let product of allDbProducts) {
        dtoProducts.push(await appendCategory(product));
    }

    return res.status(200).json({ products: dtoProducts });
}

async function handleGetProductById(req, res){
    const id = req.params.id;
    const product = await Product.findById(id);
    if(!product) return res.status(404).json({error: "Product not found!!!"});

    const dtoProduct = await appendCategory(product);
    
    return res.json(dtoProduct);
}

async function handleUpdateProductById(req, res){
    const updateProduct = req.body;
    const Product = await Product.findByIdAndUpdate(req.params.id, {
        name: body.name,
        description: body.description,
        categoryId: body.category_id,
        price: body.price,
        stock: body.stock
    });

    return res.status(200).json({status: "success"});
}

async function handledeleteProductById(req, res){
    const Product = await Product.findByIdAndDelete(req.params.id);
    return res.status(404).json({status: "success"});
}

async function handleCreateNewProduct(req, res){
    const body = req.body;
    if(!body||
        !body.name||
        !body.description||
        !body.category_Id||
        !body.price||
        !body.stock){
            return res.status(400).json({msg: "All fields are req...."});
        }

    const result = await Product.create({
        name: body.name,
        description: body.description,
        categoryId: body.category_Id,
        price: body.price,
        stock: body.stock
    })
    return res.status(201).json({msg: "success", id: result._id});
}

async function appendCategory(product){

    const prod = JSON.parse(JSON.stringify(product)); 

    const category = await Category.findById(product.categoryId);
    prod.category = category.name;
    return prod;
}

module.exports = {
    handleGetAllProducts,
    handleGetProductById,
    handleUpdateProductById,
    handledeleteProductById,
    handleCreateNewProduct
}