import { useState, useEffect } from "react";
import { HeaderKitchen } from "../../components/Header/Header";
import { OrderCardBase } from "../../components/OrderCard/OrderCardBase";
import { OrderCardProducts } from "../../components/OrderCard/OrderCardProducts";
// import { OrderCard } from "../../components/OrderCard/OrderCard";
// import { getStorageKey} from '../../services/storage';
import { getOrders, updateOrder } from "../../services/data";
import "./style.scss";

const Kitchen = () => {
  const [orderList, setOrderList] = useState([]);
  const [statusOrder, setStatusOrder] = useState([]);

  useEffect(() => {
    getOrders()
      .then((response) => {
        const sortById = response.sort((itemA, itemB) => itemA.id - itemB.id);
        setOrderList(sortById);
        console.log(sortById);
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
    updateOrder("ready", id);
    const orderStatusId = orderList.find((element) => element.id === id);

    if (orderStatusId) {
      setStatusOrder(orderStatusId)    
    } else {
      const newStatus = {
        id: id,
        status: statusOrder,
      };
      setOrderList([...orderList, newStatus]);
    }
  };

  // const orderDone = () => {
  //   console.log("to pronto pro buxin");
  // };

  return (
    <>
      <HeaderKitchen />
      <section className="allOrders-container">
          {orderList.map((order, index) => (
            (order.status === 'pending' || order.status === 'processing')
            && <OrderCardBase 
              key={`order-${index}`}
              orderId={order.id}
              clientName={order.client_name}
              tableNumber={order.table}
              orderStatus={order.status}
              orderProcessed={order.processedAt}
              orderCreatedAt={order.createdAt} 
              updatedAt={order.updatedAt}
              orderProducts={order.products}
              updateOrderToProcessing={() => updateStatusClick(index, order.id, 'processing', orderList, setOrderList)}
              updateOrderToReady={() => updateStatusClick(index, order.id, 'ready', orderList, setOrderList)}
            >

              {order.Products.map((product, productIndex) => (
                <OrderCardProducts
                  key={`${order.id}-item-${productIndex}`}
                  qtd={product.qtd}
                  name={product.name}
                  flavor={product.flavor}
                  complement={product.complement}
                />
              ))}
            </OrderCardBase>


            // <article key={item.id} className="order-header">
            //   {" "}
            //   <p>#{item.id} • MESA {item.table} • {item.client_name}</p>
            //   <p>Cliente:  </p>
            //   <p>Mesa  </p>{" "}
            // </article>

            // <article className="order-content" >
              // {item.Products.map((produto) => (
              //   <>
              //     {" "}
              //     <p className="info-order">x {produto.qtd}</p>{" "}
              //     <p className="info-order">{produto.name}</p>
              //     <p className="info-order">Sabor: {produto.flavor}</p>
              //     <p className="info-order">Adicional: {produto.complement}</p>
              //   </>
              // ))}{" "}
            // </article>
            // <button onClick={() => updateStatusClick(item.id)}>
            //   Marcar como pronto
            // </button>
        ))}
      </section>
      {/* <nav>Filtro de status
        <p></p>
      </nav> */}
    </>
  );
};

export default Kitchen;

//para armazenar utiliza-se a API: quando for enviar, faz um POST/orders, faz o fetch, montar o objeto de acordo como está na API
//no botao de fazer o pedido, junta (join?) o objeto
