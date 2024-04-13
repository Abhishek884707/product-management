const express = require("express");

const router = express.Router();

const {handleGetAllProducts,
    handleGetProductById,
    handleUpdateProductById,
    handledeleteProductById,
    handleCreateNewProduct} = require("../controllers/productController")

    
    // REST APIs
    router.route("/:id")
    /**
     * @swagger
     * /api/Products/{id}:
     *  get:
     *     summery: Get Product by Id.
     *     tags: [Fetch]
     *     description: Retrieve a Product by id.
     *     parameters:
     *          - id: id
     *            in: path
     *            description: the id of the Product.
     *            require: true
     *            schema:
     *              type: string
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    .get(handleGetProductById)
    /**
     * @swagger
     * /api/Products/{id}:
     *  patch:
     *      summery: Update Product by Id.
     *      tags: [Update]
     *      description: Update a Product details by id.
     *      parameters:
     *          - id: id
     *            in: path
     *            description: the id of the Product.
     *            require: true
     *            schema:
     *              type: string
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      name:
     *                             type: string
     *                      description:
     *                              type: string
     *                      category_id:
     *                              type: string
     *                      amount:
     *                              type: string
     *                      stock:
     *                             type: string  
     *                  example:
     *                      name: Laptop
     *                      description: Apple i5 intel 10th generation
     *                      category: 661a259cc87f9ba6fc64e845
     *                      amount: 70000
     *                      stock: 25
     *      responses:
     *      200:
     *        description: Updated Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *     
     * */
    .patch(handleUpdateProductById)
    /**
     * @swagger
     * /api/Products/{id}:
     *  delete:
     *      summery: Delete Product by Id.
     *      tags: [Delete]
     *      description: Retrieve a Product by id.
     *      parameters:
     *          - id: id
     *            in: path
     *            description: the id of the Product.
     *            require: true
     *            schema:
     *              type: string
     *      responses:
     *          200:
     *              description: Fetched Successfully
     *          400:
     *              description: Bad Request
     *          404:
     *              description: Not Found
     *          500:
     *              description: Server Error
     */
    .delete(handledeleteProductById)
    
    router.route("/")
    /**
     * @swagger
     * /api/Products:
     *  get:
     *      summery: Get a list of Products.
     *      tags: [Fetch]
     *      description: Retrieve a list of Products.
     *      responses:
     *         200:
     *            description: A List of Products. 
     */
    .get(handleGetAllProducts)
    /**
     * @swagger
     * /api/Products:
     *  post:
     *      summery: Create a new Product.
     *      tags: [Create]
     *      description: Enter required all perameters to add new Product in database.
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      name:
     *                             type: string
     *                      description:
     *                              type: string
     *                      category_id:
     *                              type: string
     *                      amount:
     *                              type: string
     *                      stock:
     *                             type: string  
     *                  example:
     *                      name: Laptop
     *                      description: Apple i5 intel 10th generation
     *                      category: 661a259cc87f9ba6fc64e845
     *                      amount: 70000
     *                      stock: 25
     *      responses:
     *          200:
     *              description: Successfully created a new Product.
     *          400:
     *              description: All fields are required.
     *          500:
     *              description: Some Server Error.
     */
    .post(handleCreateNewProduct);


    module.exports = router;