import { getStorageKey } from "./storage";

export const getProducts = async () => {
  const token = getStorageKey();

  return await fetch("https://lab-api-bq.herokuapp.com/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Erro ao acessar a API de produtos"));
};

export const createOrder = async (orders) => {
  const token = getStorageKey();
  const body = {
    "client": orders.client,
    "table": orders.table,
    "products": orders.products,
  }

  await fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Erro ao criar o pedido"));
};

export const getOrders = async () => {
  const token = getStorageKey();

  return await fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error, "Erro ao acessar os pedidos"));
}

export const updateOrder = async (index, id, status, orderList, setOrderList) => {
  const token = getStorageKey();

  return await fetch(`https://lab-api-bq.herokuapp.com/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      status: status
    })
  })
    .then((response) => response.json())
    .then(() => {
      const pendingOrdersList = [...orderList];
      pendingOrdersList[index].status = status;
      setOrderList(pendingOrdersList);
    })
    .catch((error) => console.log(error, "Erro ao atualizar os pedidos"));
}
