const { Category } = require("../models");

const getAllCategories = async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const data = await Category.findAll();
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Get category , ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getCategoriesById = async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const { id } = req.params;
  try {
    const data = await Category.findByPk(id);

    data
      ? res.json({ success: true, data })
      : res
          .status(404)
          .json({ success: false, error: "Category does not exist" });
  } catch (error) {
    console.log(`[ERROR]: Get category , ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createCategories = async (req, res) => {
  // create a new category
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const { category_name } = req.body;

    if (category_name) {
      await Category.create({ category_name });
      return res.json({ success: true, data: "Created a category" });
    }
    return res
      .status(404)
      .json({ success: false, error: "Please provide teg correct fields" });
  } catch (error) {
    console.log(`[ERROR]: Get category , ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateCategories = (req, res) => {
  // update a category by its `id` value
  res.send("categories");
};

const deleteCategories = (req, res) => {
  // delete a category by its `id` value
  res.send("categories");
};

module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories,
};
