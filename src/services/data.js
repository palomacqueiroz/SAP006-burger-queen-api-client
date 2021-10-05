import { getStorageKey } from "./storage";

// token menu: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbGVAbGVsZXQuY29tIiwiaWQiOjIyNjgsImlhdCI6MTYzMjE2NTkwMCwiZXhwIjoxNjYzNzIzNTAwfQ.QX2JUBulrIlNPIHpcBfbP3gGZ8D3Lj61JArdHBamocU

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
    .then((response) => response.json() && console.log('sucesso'))
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

export const updateOrder = async (status, id) => {
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
    .catch((error) => console.log(error, "Erro ao atualizar os pedidos"));
}

export const convertDate = (apiDate) => {
  const date = new Date(apiDate);
  let day = date.getDay();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) { day = `0${day}`; }
  if (month < 10) { month = `0${month}`; }

  const correctDate = `${day}.${month}.${year}`;

  return correctDate;
};

export const convertTime = (apiDate) => {
  const date = new Date(apiDate);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  const correctTime = `${hours}:${minutes}`;

  return correctTime;
};