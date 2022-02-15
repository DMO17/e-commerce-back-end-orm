const { Router } = require("express");
const {
  getAllTags,
  getTagsById,
  createTags,
  updateTags,
  deleteTags,
} = require("../../controller/tag");

const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

const router = Router();

router.get("/", getAllTags);

router.get("/:id", getTagsById);

router.post("/", createTags);

router.put("/:id", updateTags);

router.delete("/:id", deleteTags);

module.exports = router;
