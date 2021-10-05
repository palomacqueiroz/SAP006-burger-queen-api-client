import "./style.scss";

export const OrderCardProducts = ({ qtd, name, flavor, complement }) => {

    return (
        <>
            <section className="order-products">
                <div className="order-products-left">
                    <p className="info-order">{qtd}x </p>
                    <p className="info-order"> {name}</p>
                </div>
                <div className="order-products-right">
                    <p className="info-order left">{flavor}</p>
                    <p className="info-order right">{complement}</p>
                </div>
            </section>
        </>
    )
};