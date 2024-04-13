const express = require("express");

const router = express.Router();

const {handleGetAllCategories,
    handleGetCategoryById,
    handleUpdateCategoryById,
    handleCreateNewCategory} = require("../controllers/categoryController")

    
    // REST APIs
    router.route("/:id")
    /**
     * @swagger
     * /api/categories/{id}:
     *  get:
     *     summery: Get categories by Id.
     *     tags: [Fetch]
     *     description: Retrieve a categories by id.
     *     parameters:
     *          - id: id
     *            in: path
     *            description: the id of the category.
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
    .get(handleGetCategoryById)
    /**
     * @swagger
     * /api/categories/{id}:
     *  patch:
     *      summery: Update category by Id.
     *      tags: [Update]
     *      description: Update a category details by id.
     *      parameters:
     *          - id: id
     *            in: path
     *            description: the id of the category.
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
     *                              type: string
     *                      description:
     *                              type: string 
     *                  example:
     *                      name: Electronics
     *                      description: Products related to elctronics groups
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
    .patch(handleUpdateCategoryById);
    
    router.route("/")
    /**
     * @swagger
     * /api/categories:
     *  get:
     *      summery: Get a list of categories.
     *      tags: [Fetch]
     *      description: Retrieve a list of categories.
     *      responses:
     *         200:
     *            description: A List of categories. 
     */
    .get(handleGetAllCategories)
    /**
     * @swagger
     * /api/categories:
     *  post:
     *      summery: Create a new category.
     *      tags: [Create]
     *      description: Enter required all perameters to add new category in database.
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      name:
     *                              type: string
     *                      description:
     *                              type: string 
     *                  example:
     *                      name: Electronics
     *                      description: Products related to elctronics groups
     *      responses:
     *          200:
     *              description: Successfully created a new category.
     *          400:
     *              description: All fields are required.
     *          500:
     *              description: Some Server Error.
     */
    .post(handleCreateNewCategory);


    module.exports = router;