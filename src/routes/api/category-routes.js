const { Router } = require("express");
const {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../../controller/category");

const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

const router = Router();

router.get("/", getAllCategories);

router.get("/:id", getCategoriesById);

router.post("/", createCategories);

router.put("/:id", updateCategories);

router.delete("/:id", deleteCategories);

module.exports = router;
