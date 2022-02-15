const { Router } = require("express");
const {
  getAllProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../../controller/product");

const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

const router = Router();

// get all products
router.get("/", getAllProducts);

// get one product
router.get("/:id", getProductsById);

// create new product
router.post("/", createProducts);

// update product
router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

module.exports = router;
