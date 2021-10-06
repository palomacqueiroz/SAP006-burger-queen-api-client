import { useState, useEffect } from "react";
import { HeaderKitchen } from "../../components/Header/Header";
import { OrderCardBase } from "../../components/OrderCard/OrderCardBase";
import { OrderCardProducts } from "../../components/OrderCard/OrderCardProducts";
import { getOrders, updateOrder } from "../../services/data";
import "./style.scss";

const Kitchen = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getOrders()
      .then((response) => {
        const sortById = response.sort((itemA, itemB) => itemB.id - itemA.id);
        setOrderList(sortById);
        console.log(sortById);
      })
      .catch((error) =>
        console.log(error, "Erro ao acessar a lista de pedidos")
      );
  }, []);

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
              updateOrderToProcessing={() => updateOrder(index, order.id, 'processing', orderList, setOrderList)}
              updateOrderToReady={() => updateOrder(index, order.id, 'ready', orderList, setOrderList)}
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
        ))}
      </section>
      {/* <nav>Filtro de status
        <p></p>
      </nav> */}
    </>
  );
};

export default Kitchen;
