
function mapRequestToOrder(data) {

  const orderId = data.numeroPedido.split("-")[0];

  return {
    orderId,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };

}

module.exports = { mapRequestToOrder };
