const { Router } = require("express");

const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

const router = Router();

router.get("/", async (req, res) => {
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
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
