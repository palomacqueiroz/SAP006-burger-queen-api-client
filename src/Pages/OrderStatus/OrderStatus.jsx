import { useState, useEffect } from 'react';
import { getOrders } from "../../services/data";
import { OrderCardBase } from "../../components/OrderCard/OrderCardBase";
import { OrderCardProducts } from "../../components/OrderCard/OrderCardProducts";
import { Header } from '../../components/Header/Header';
import GeneralButton from '../../components/Button/Button';

const OrderStatus = () => {
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
    }, []); //eslint-disable-line


    const handleClickStatus = (selectStatusOrder) => {
        setOrder(statusOrder[selectStatusOrder]);
    };

    return (
        <>
            <Header />            
            <nav>         
                <header className="select-menu-perMeal">
                    <GeneralButton variant="third" onClick={() => handleClickStatus('all')}>Todos</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('pending')}>Pendente</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('processing')}>Preparando</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('ready')}>Pronto</GeneralButton>
                    <GeneralButton variant="third" onClick={() => handleClickStatus('delivered')}>Entregue</GeneralButton>
                </header>
            </nav>
            <div>
                <section className="allOrders-container">
                    {order.map((item, index) => (
                        <OrderCardBase 
                        key={`order-${index}`}
                        orderId={item.id}
                        clientName={item.client_name}
                        tableNumber={item.table}
                        orderStatus={item.status}
                        orderProcessed={item.processedAt}
                        orderCreatedAt={item.createdAt} 
                        updatedAt={item.updatedAt}
                        orderProducts={item.products}                        
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
            </div>
        </>
        
    )
}

export default OrderStatus;