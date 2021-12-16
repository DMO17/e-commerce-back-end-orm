const { Tag, Product, ProductTag } = require("../models");

const getAllTags = async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

  try {
    const data = await Tag.findAll({
      include: {
        model: Product,
        attributes: ["product_name", "price", "stock"],
      },
      attributes: ["tag_name"],
    });
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Get Products , ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getTagsById = async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.send("tags");
};

const createTags = async (req, res) => {
  // create a new tag
  res.send("tags");
};

const updateTags = (req, res) => {
  // update a tag's name by its `id` value
  res.send("tags");
};

const deleteTags = (req, res) => {
  // delete on tag by its `id` value
  res.send("tags");
};

module.exports = {
  getAllTags,
  getTagsById,
  createTags,
  updateTags,
  deleteTags,
};
