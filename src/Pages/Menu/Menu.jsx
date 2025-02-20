import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getStorageKey } from "../../services/storage";
import { createOrder, getProducts } from "../../services/data";
import {
  ItemCard,
  SelectedItem,
  Total,
} from "../../components/ItemsMenu/ItemsMenu";
import MenuOptionsNavBar from "../../components/Footer/NavBarOptions";
import GeneralButton from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import "./style.scss";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [values, setValues] = useState({
    table: "",
    client: "",
  });

  const token = getStorageKey();

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
        const breakfast = res.filter((item) => item.type === "breakfast");
        setSelectedProducts(breakfast);

        const burger = res.filter((item) => item.sub_type === "hamburguer");
        setSelectedProducts(burger);

        const drinks = res.filter((item) => item.sub_type === "drinks");
        setSelectedProducts(drinks);

        const side = res.filter((item) => item.sub_type === "side");
        setSelectedProducts(side);
        return res;
      })
      .catch((error) =>
        console.log(error, "Erro ao acessar a lista de produtos")
      );
  }, [token]);

  const handleClick = (productsCategory) => {
    const selectedMenu = products.filter((item) => 
    item.type === productsCategory || item.sub_type === productsCategory);
    setSelectedProducts(selectedMenu);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const deleteItem = (id) => {
    const index = itemsList.findIndex((item) => item.id === id);
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(index, 1);
    setItemsList(updatedItemsList);
  };

  const removeItemOfCart = (item) => {
    const summary = itemsList;
    const countElement = summary.find((element) => element.id === item.id);

    if (countElement.qtd > 1) {
      countElement.qtd -= 1;
      setItemsList((itemArray) =>
        itemArray.map((itemProduct) =>
          itemProduct.id === countElement.id ? countElement : itemProduct
        )
      );
    } else {
      deleteItem(item.id);
    }
  };

  const addItemOnCart = (item) => {
    const countElement = itemsList.find((element) => element.id === item.id);

    if (countElement) {
      countElement.qtd += 1;
      setItemsList((itemArray) =>
        itemArray.map((itemProduct) =>
          itemProduct.id === countElement.id ? countElement : itemProduct
        )
      );
    } else {
      const newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        flavor: item.flavor,
        complement: item.complement,
        qtd: 1,
      };
      setItemsList([...itemsList, newItem]);
    }
  };

  const history = useHistory();

  const handleSubmit = () => {
    const object = {
      client: values.client,
      table: values.table,
      products: itemsList.map((item) => {
        const productsArray = {
          id: item.id,
          flavor: item.flavor,
          complement: item.complement,
          qtd: item.qtd,
        };
        return productsArray;
      }),
    };
    createOrder(object);
    history.push("/orders-status");
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="left-side">
          <header className="select-menu-perMeal">
            <GeneralButton
              variant="third"
              onClick={() => handleClick("breakfast")}
            >
              Café&Cia
            </GeneralButton>
            <GeneralButton
              variant="third"
              onClick={() => handleClick("hamburguer")}
            >
              Lanchos
            </GeneralButton>
            <GeneralButton
              variant="third"
              onClick={() => handleClick("drinks")}
            >
              Bebidas
            </GeneralButton>
            <GeneralButton variant="third" onClick={() => handleClick("side")}>
              Petiscos
            </GeneralButton>
          </header>
          <section className="products-list-perMeal" {...setSelectedProducts}>
            {selectedProducts.map((item) => (
              <ItemCard
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.image}
                flavor={item.flavor}
                complement={item.complement}
                addItemOnCart={() => {
                  addItemOnCart(item);
                }}
              />
            ))}
          </section>
        </div>
        <div className="right-side cartList-display">
          <section className="section-ordersList">
            <article className="text-orders">
              <h3 className="title-orders">Pedidos</h3>
              <form className="form-inputs-order">
                <label>Mesa</label>
                <input
                  className="input-order table"
                  value={values.table}
                  name="table"
                  type="number"
                  min="1"
                  max="9"
                  placeholder="0"
                  onChange={handleChange}
                />{" "}
                <br />
                <label>Cliente</label>
                <input
                  className="input-order clientName"
                  value={values.client}
                  name="client"
                  type="text"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </form>
            </article>
            <article className="text-ordersList">
              {itemsList.map((item) => {
                return (
                  <SelectedItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    flavor={item.flavor}
                    complement={item.complement}
                    qtd={item.qtd}
                    removeItemOfCart={() => removeItemOfCart(item)}
                    addItemOnCart={() => addItemOnCart(item)}
                  />
                );
              })}
            </article>
            <hr />
            <Total cartItems={itemsList} />
            <GeneralButton
              variant="fifth"
              className="btn-confirmOrder"
              onClick={() => handleSubmit()}
            >
              Confirmar pedido
            </GeneralButton>
          </section>
        </div>
        <MenuOptionsNavBar />
      </main>
    </>
  );
};

export default Menu;
