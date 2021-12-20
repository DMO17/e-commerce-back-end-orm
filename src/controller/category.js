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
      .json({ success: false, error: "Please provide the correct fields" });
  } catch (error) {
    console.log(`[ERROR]: Get category , ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateCategories = async (req, res) => {
  // update a category by its `id` value
  try {
    const { category_name } = req.body;

    if (category_name) {
      const data = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (!data[0]) {
        return res
          .status(404)
          .json({ message: "No category with this id exists" });
      }

      return res.json({ success: true, data: "updated a category" });
    }
    return res
      .status(404)
      .json({ success: false, error: "Please provide the correct fields" });
  } catch (error) {
    console.log(`[ERROR]: Get category , ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteCategories = async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No category with this id exists" });
    }

    return res.json({ success: true, data: "Deleted category" });
  } catch (error) {
    logError("DELETE category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories,
};
