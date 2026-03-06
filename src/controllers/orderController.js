
const orderService = require("../services/orderService");
const { mapRequestToOrder } = require("../utils/mapper");

class OrderController {

  async create(req, res) {

    try {

      const mapped = mapRequestToOrder(req.body);

      const order = await orderService.create(mapped);

      return res.status(201).json(order);

    } catch (error) {

      return res.status(500).json({
        message: "Error creating order",
        error: error.message
      });

    }
  }

  async getById(req, res) {

    const { id } = req.params;

    const order = await orderService.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json(order);
  }

  async list(req, res) {

    const orders = await orderService.findAll();

    return res.json(orders);
  }

  async update(req, res) {

    const { id } = req.params;

    const mapped = mapRequestToOrder(req.body);

    const order = await orderService.update(id, mapped);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json(order);
  }

  async delete(req, res) {

    const { id } = req.params;

    const result = await orderService.delete(id);

    if (!result) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(204).send();
  }

}

module.exports = new OrderController();
