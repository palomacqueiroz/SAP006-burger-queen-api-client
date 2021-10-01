import { getStorageKey } from "./storage";
// import { useEffect } from "react";

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlbGVAbGVsZXQuY29tIiwiaWQiOjIyNjgsImlhdCI6MTYzMjE2NTkwMCwiZXhwIjoxNjYzNzIzNTAwfQ.QX2JUBulrIlNPIHpcBfbP3gGZ8D3Lj61JArdHBamocU

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

export const getOrder = () => {
  
}