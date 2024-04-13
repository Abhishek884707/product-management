const Category = require("../models/category")

async function handleGetAllCategories(req, res){
    const allDbCategories = await Category.find({});
    return res.status(200).json(allDbCategories);
}

async function handleGetCategoryById(req, res){
    const id = req.params.id;
    const category = await Category.findById(id);
    if(!category) return res.status(404).json({error: "Category not found!!!"});
    return res.json(category);
}

async function handleUpdateCategoryById(req, res){
    const updateCategory = req.body;
    const category = await Category.findByIdAndUpdate(req.params.id, {name: updateCategory.name, description: updateCategory.description});
    return res.status(200).json({status: "success"});
}

async function handledeleteCategoryById(req, res){
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.status(404).json({status: "success"});
}

async function handleCreateNewCategory(req, res){
    const body = req.body;

    if(!body||
        !body.name||
        !body.description){
            return res.status(400).json({msg: "All fields are req...."});
        }

        
    const result = await Category.create({
        name: body.name,
        description: body.description
    })
    return res.status(201).json({msg: "success", id: result._id});
}

module.exports = {
    handleGetAllCategories,
    handleGetCategoryById,
    handleUpdateCategoryById,
    handledeleteCategoryById,
    handleCreateNewCategory
}