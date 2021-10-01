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

export const CreateOrder = async(order, item) => {
  const token = getStorageKey();
  
    return await fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        client: order.client,
        table: order.table,
        products: [
          {
            id: item.id,
            qtd: item.qtd,
          },
        ],
      }),
    })
      .then((response) => {
        response.json();
        console.log(response.json);
      })    
      .catch((error) => console.log(error, "Erro ao criar o pedido"));
      
  }

