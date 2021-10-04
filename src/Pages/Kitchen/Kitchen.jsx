import { useState, useEffect } from 'react';
import { HeaderKitchen } from '../../components/Header/Header';
import { createOrder } from '../../services/data';
import './style.scss'

const Kitchen = () => {
    const [ordersList, setOrdersList] = useState([]);

        createOrder()
            .then((data) => setOrdersList(data)) 
            .catch((error) => console.log(error, 'Erro ao acessar a lista de pedidos'))

    return (
        <>
            <HeaderKitchen />
            <div className='div-style'>
                Kitchen <br />
                {'<em construção>'}

            <section className="list-all-orders" {...ordersList}>
                Lista de pedidos
            </section>
            </div>
        </>
    )
}

export default Kitchen;

//para armazenar utiliza-se a API: quando for enviar, faz um POST/orders, faz o fetch, montar o objeto de acordo como está na API
//no botao de fazer o pedido, junta (join?) o objeto