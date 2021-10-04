import { useState, useEffect } from "react";
import { HeaderKitchen } from "../../components/Header/Header";
import { OrderCard } from "../../components/OrderCard/OrderCard";
// import { getStorageKey} from '../../services/storage';
import { getOrders } from "../../services/data";
import "./style.scss";

const Kitchen = () => {
  const [kitchen, setKitchen] = useState([]);
  // const token = getStorageKey();

  useEffect(() => {
    getOrders().then((response) => setKitchen(response));
    console.log("foi pro setKitchen");
    console.log(setKitchen);
    // .catch((error) => console.log(error, 'Erro ao acessar a lista de pedidos'))
  }, []);

  const orderDone = () => {
    console.log("to pronto pro buxin");
  };

  return (
    <>
      <HeaderKitchen />
      <h3>Lista de pedidos</h3>
      <div>
        {kitchen.map((item) => (
          <div key={item.id}>
            {" "}
            <p>nome: {item.client_name} </p> <p>mesa {item.table} </p>{" "}
            {item.Products.map((produto) => (
              <>
                {" "}
                <p>produto: {produto.name}</p> <p>quantidade: {produto.qtd}</p>{" "}
              </>
            ))}{" "}
          </div>
        ))}
      </div>
      <nav>Filtro de status</nav>
    </>
  );
};

export default Kitchen;

//para armazenar utiliza-se a API: quando for enviar, faz um POST/orders, faz o fetch, montar o objeto de acordo como está na API
//no botao de fazer o pedido, junta (join?) o objeto
