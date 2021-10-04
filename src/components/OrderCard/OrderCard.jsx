import { Icon } from '@iconify/react';

export const OrderCardHeader = ({id, name, table}) => {

    return (
        <article className="order-card" key={id}>
            <p className="order-info clientName">Cliente: {name}</p>
            <p className="order-info table">Mesa {table}</p>
            {/* <section>
                <p value="product">Produto: {product}</p>
                <p name="qtd">Quantidade: {qtd}</p>
            </section>
            <div className="footer-card">
                <button className="btn-addItem" onClick={orderDone}>MARCAR COMO PRONTO <Icon icon="akar-icons:check" color="white" /></button>
            </div> */}
        </article>
    )
};

export const OrderCardContent = ({product, qtd, orderDone}) => {

    
}
