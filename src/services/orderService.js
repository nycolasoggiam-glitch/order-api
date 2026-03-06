
const Order = require("../models/Order");
const Item = require("../models/Item");

class OrderService {

  async create(orderData) {

    const order = await Order.create({
      orderId: orderData.orderId,
      value: orderData.value,
      creationDate: orderData.creationDate
    });

    const items = orderData.items.map(i => ({
      ...i,
      orderId: order.orderId
    }));

    await Item.bulkCreate(items);

    return order;
  }

  async findById(id) {
    return await Order.findByPk(id, {
      include: Item
    });
  }

  async findAll() {
    return await Order.findAll({
      include: Item
    });
  }

  async update(id, data) {

    const order = await Order.findByPk(id);

    if (!order) return null;

    await order.update({
      value: data.value,
      creationDate: data.creationDate
    });

    return order;
  }

  async delete(id) {

    const order = await Order.findByPk(id);

    if (!order) return null;

    await Item.destroy({ where: { orderId: id } });

    await order.destroy();

    return true;
  }
}

module.exports = new OrderService();
