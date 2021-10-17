import { TimeOrPrepareTime } from "../Time/TimeOrPrepareTime";
import GeneralButton from "../Button/Button"
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
  updateOrderToClient,
}) => {

  return (
    <section className="order-card">
      <article className="order-card-status">
        {orderStatus === "pending" && (
          <div className="order-status bg-color-pending color-lightest">
            Pendente
          </div>
        )}
        {orderStatus === "processing" && (
          <div className="order-status bg-color-yellow color-brown">
            Em andamento
          </div>
        )}
        {orderStatus === "ready" && (
          <div className="order-status bg-color-green color-lightest">
            Pronto para servir
          </div>
        )}
        {orderStatus === "delivered" && (
          <div className="order-status bg-color-toclient color-lightest">
            Entregue
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
      </article>

      <section className="order-card-products">{children}</section>

      <section className="order-card-buttons">
        {orderStatus === "pending" && (
          <GeneralButton variant="eleventh" onClick={updateOrderToProcessing}>Preparando</GeneralButton>
        )}
        {orderStatus === "processing" && (
          <GeneralButton variant="eleventh" onClick={updateOrderToReady}>Pronto</GeneralButton>
        )}
        {orderStatus === "ready" && (
          <GeneralButton variant="eleventh" onClick={updateOrderToClient}>Entregue</GeneralButton>
        )}
      </section>
    </section>
  );
};
