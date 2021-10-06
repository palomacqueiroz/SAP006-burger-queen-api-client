// import { TimeOrPrepareTime } from "../Time/PrepareTime";
import { convertDate, convertTime } from "../../services/data";
import "./style.scss";

export const OrderCardBase = ({
  orderId,
  tableNumber,
  clientName,
  orderStatus,
  orderCreatedAt,
  children,
  updateOrderToProcessing,
  updateOrderToReady,
  updateOrderToDone,
}) => {
  const getOrderCreatedAt = new Date(orderCreatedAt);
  const getOrderProcessedAt = new Date(getOrderCreatedAt);
  const getOrderResidual = Math.abs(getOrderProcessedAt - getOrderCreatedAt);
  console.log(getOrderResidual, '123');
  const showOrderPrepTime = Math.floor(getOrderResidual / 1000 / 60);

  const timeToGetOrderDone =
    showOrderPrepTime === 60
      ? `${getOrderResidual + 1}: 00`
      : `${getOrderResidual}:${
          showOrderPrepTime < 10 ? "0" : `${showOrderPrepTime}`
        }`;
  console.log("Tempo para preparar =", showOrderPrepTime);

  return (
    <section className="order-card">
      <article className="order-card-status">
        {orderStatus === "pending" && (
          <div className="order-status weight-500 bg-color-pending color-lightest">
            Pendente
          </div>
        )}
        {orderStatus === "processing" && (
          <div className="order-status weight-500 bg-color-yellow color-brown">
            Em andamento
          </div>
        )}
        {orderStatus === "ready" && (
          <div className="order-status weight-500 bg-color-green color-lightest">
            Pronto para servir
          </div>
        )}
        {orderStatus === "done" && (
          <div className="order-status weight-500 bg-color-done color-lightest">
            Servido
          </div>
        )}
        <p className="order-info id">
          #{orderId} • MESA {tableNumber} • {clientName}
        </p>
        {/* <TimeOrPrepareTime /> */}
        <p className="order-info dateAndTime">
          {/* {timeToGetOrderDone}  */}
          {convertDate(orderCreatedAt)} às{" "}
          {convertTime(orderCreatedAt)}
        </p>
        <p className="order-info timePrepare">
          Tempo de Preparo: {timeToGetOrderDone}
        </p>
      </article>

      <section className="order-card-products">{children}</section>

      <section className="order-card-buttons">
        {orderStatus === "pending" && (
          <button onClick={updateOrderToProcessing}>Preparando</button>
        )}
        {orderStatus === "processing" && (
          <button onClick={updateOrderToReady}>Pronto</button>
        )}
        {orderStatus === "ready" && (
          <button onClick={updateOrderToDone}>Servido</button>
        )}
        {orderStatus === "done" && (
          <p className="order-done-msg color-done">
            Pedido finalizado
          </p>
        )}
      </section>
    </section>
  );
};
