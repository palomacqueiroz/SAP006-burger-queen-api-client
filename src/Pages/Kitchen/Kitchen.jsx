import { useState, useEffect } from 'react';
import { CreateOrder } from '../../services/data';
import { getStorageKey } from '../../services/storage';
import './style.scss'

const Kitchen = () => {
    const token = getStorageKey();

    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        CreateOrder()
            .then((data) => setOrdersList(data)) //aqui traz toda a lista dos pedidos enviada de volta para a API
            .catch((error) => console.log(error, 'Erro ao acessar a lista de produtos'))
    }, [token])

    return (
        <>
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