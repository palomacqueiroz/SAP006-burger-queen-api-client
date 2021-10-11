import { useState, useEffect } from "react";
import { HeaderKitchen } from "../../components/Header/Header";
import { OrderCardBase } from "../../components/OrderCard/OrderCardBase";
import { OrderCardProducts } from "../../components/OrderCard/OrderCardProducts";
import { StatusFilter } from "../../components/StatusFilter/StatusFilter";
import { getOrders, updateOrder } from "../../services/data";
import "./style.scss";

const Kitchen = () => {
  const [order, setOrder] = useState([]);
  const [statusOrder, setStatusOrder] = useState({});

  useEffect(() => {
    getOrders()
      .then((response) => {
        const sortById = response.sort((itemA, itemB) => itemB.id - itemA.id);
        setOrder(sortById);

        setStatusOrder(e => ({...e, all:response}));

        const pending = response.filter((order) => order.status === "pending");
        setStatusOrder(e => ({...e, pending}));

        const processing = response.filter((order) => order.status === "processing");
        setStatusOrder(e => ({...e, processing}));

        const ready = response.filter((order) => order.status === "ready");
        setStatusOrder(e => ({...e, ready}));

        const delivered = response.filter((order) => order.status === "delivered");
        setStatusOrder(e => ({...e, delivered}));    
      })
      .catch((error) =>
        console.log(error, "Erro ao acessar a lista de pedidos")
      );
  }, []);

  const handleClickStatus = (selectStatusOrder) => {
    setOrder(statusOrder[selectStatusOrder]);
};

  return (
    <>
      <HeaderKitchen />
      <div className="content-container">
        <section className="allOrders-container">
            {order.map((item, index) => (
              <OrderCardBase 
                key={`order-${index}`}
                orderId={item.id}
                clientName={item.client_name}
                tableNumber={item.table}
                orderStatus={item.status}
                processedAt={item.processedAt}
                createdAt={item.createdAt} 
                updatedAt={item.updatedAt}
                orderProducts={item.products}
                updateOrderToProcessing={() => 
                  updateOrder(index, item.id, 'processing', order, setOrder)}
                updateOrderToReady={() => 
                  updateOrder(index, item.id, 'ready', order, setOrder)}
              >
                {item.Products.map((product, productIndex) => (
                  <OrderCardProducts
                    key={`${item.id}-item-${productIndex}`}
                    qtd={product.qtd}
                    name={product.name}
                    flavor={product.flavor}
                    complement={product.complement}
                  />
                ))}
              </OrderCardBase>
          ))}
        </section>
        <StatusFilter
          allOrders={() => handleClickStatus('all')}
          pendingOrders={() => handleClickStatus('pending')}
          preparingOrders={() => handleClickStatus('processing')}
          doneOrders={() => handleClickStatus('ready')}
        />
      </div>
    </>
  );
};

export default Kitchen;
