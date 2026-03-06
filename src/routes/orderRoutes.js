
const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.post("/order", orderController.create);

router.get("/order/list", orderController.list);

router.get("/order/:id", orderController.getById);

router.put("/order/:id", orderController.update);

router.delete("/order/:id", orderController.delete);

module.exports = router;
