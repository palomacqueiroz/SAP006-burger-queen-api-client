import './style.scss'

export const ItemCard = ({id, name, price, img, flavor, complement, addItemOnCart}) => {

    return (
        <article className="item-card" key={id}>
            <img src={img} alt="Imagem do produto" className="img-product-info"></img>
            <p className="product-info name">{name}</p>
            <section className="burger-info">
                <p className="product-info flavor" value="sabor">{flavor}</p>
                <p className="product-info complement" name="complemento" >{`${complement !== null ? complement : ''}`}</p>
            </section>
            <div className="footer-card">
                <p className="product-info price">R$ {price}</p>
                <button className="btn-addItem" onClick={addItemOnCart}>+</button>
            </div>
        </article>
    )
};

export const SelectedItem = ({id, name, price, flavor, complement, qtd, removeItemOfCart, addItemOnCart}) => {

    return (
        <article className="itemSelected" key={id}>
            <section className="info-item">
                <p className="selected-info name">{name}</p>
                <div>
                    <p>{`${flavor !== null ? flavor : ''}`}</p>
                    <p>{`${complement !== null ? complement : ''}`}</p>
                </div>
            </section>
            <section className="buttons-qtd">
                <button 
                    className="btn-addItem-qtd"
                    data-remove={id} 
                    onClick={removeItemOfCart}>
                -</button>
                <p className="product-info">{qtd}</p>
                <button 
                    className="btn-addItem-qtd"
                    data-add={id} 
                    onClick={addItemOnCart}>
                +</button>
            </section>
            <p className="product-info price">R$ {price}</p>
        </article>
    )
};

export const Total = ({ cartItems }) => {
  
    const newTotal = cartItems.reduce((acc, currentValue) => 
        acc + (currentValue.price * currentValue.qtd), 0);
  
    return <div className="CartTotal">Total: R$ {newTotal}</div>;
};
  