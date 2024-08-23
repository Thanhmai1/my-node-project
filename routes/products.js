const express = require("express");
const router = express.Router();
const product_controller = require("../controllers/product_controller.js");

router.route("/")
    .get(product_controller.get_products)
    .post(product_controller.create_product);

module.exports = router;