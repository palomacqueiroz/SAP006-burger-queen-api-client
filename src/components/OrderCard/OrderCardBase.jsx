import { TimeOrPrepareTime } from "../Time/TimeOrPrepareTime";
import { convertDate, convertTime } from "../../services/data";
import "./style.scss";

export const OrderCardBase = ({
  orderId,
  tableNumber,
  clientName,
  orderStatus,
  createdAt,
  updatedAt,
  processedAt,
  children,
  updateOrderToProcessing,
  updateOrderToReady,
  updateOrderToDone,
}) => {

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
        <TimeOrPrepareTime 
          createdAt={createdAt}
          processedAt={processedAt}
          updatedAt={updatedAt}
        />
        <p className="order-info dateAndTime">
          {/* {timeToGetOrderDone}  */}
          {/* Entrada:   {`${changeTimeDefault.toLocaleDateString()} - ${changeTimeDefault.toLocaleTimeString()}`} */}
        </p>
        <p className="order-info timePrepare">
          {/* Tempo de Preparo: {preparingTime} minutos */}
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
