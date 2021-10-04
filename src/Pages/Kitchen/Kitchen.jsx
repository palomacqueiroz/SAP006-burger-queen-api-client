import { useState, useEffect } from "react";
import { HeaderKitchen } from "../../components/Header/Header";
// import { OrderCard } from "../../components/OrderCard/OrderCard";
// import { getStorageKey} from '../../services/storage';
import { getOrders, updateOrder } from "../../services/data";
import "./style.scss";

const Kitchen = () => {
  const [orderList, setOrderList] = useState([]);
  // const [statusOrder, setStatusOrder] = useState([]);

  useEffect(() => {
    getOrders()
      .then((response) => {
        setOrderList(response);
        // const pending = response.filter((order) => order.status === "pending");
        // setStatusOrder(pending);

        // const preparing = response.filter(
        //   (order) => order.status === "preparing"
        // );
        // setStatusOrder(preparing);

        // const ready = response.filter((order) => order.status === "ready");
        // setStatusOrder(ready);

        // return response;
      })
      .catch((error) =>
        console.log(error, "Erro ao acessar a lista de pedidos")
      );
  }, []);

  /* const handleClickStatus = (productsCategory) => {
    const selectedMenu = orderList.filter(
      (order) =>
        order.status === productsCategory || order.status === productsCategory
    );
    setStatusOrder(selectedMenu);
  }; */

  const updateStatusClick = (id) => {
    updateOrder("ready", id)
    console.log(updateOrder());
  }

  /* const orderDone = () => {
    console.log("to pronto pro buxin");
  }; */

  return (
    <>
      <HeaderKitchen />
      <h3>Lista de pedidos</h3>
      <div>
        {orderList.map((item) => (
          <>
            <article key={item.id}>
              {" "}
              <p>nome: {item.client_name} </p>
              <p>mesa {item.table} </p>{" "}
            </article>

            <article>
              {item.Products.map((produto) => (
                <>
                  {" "}
                  <p>produto: {produto.name}</p>
                  <p>quantidade: {produto.qtd}</p>{" "}
                </>
              ))}{" "}
            </article>
            <button onClick={() => updateStatusClick(item.id)}>Marcar como pronto</button>
          </>
        ))}
      </div>
      <nav>Filtro de status</nav>
    </>
  );
};

export default Kitchen;

//para armazenar utiliza-se a API: quando for enviar, faz um POST/orders, faz o fetch, montar o objeto de acordo como está na API
//no botao de fazer o pedido, junta (join?) o objeto
