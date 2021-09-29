import { useState, useEffect } from 'react';
import { getStorageKey} from '../../services/storage'
import { getProducts }from '../../services/data'
import { ItemCard, SelectedItem, Total } from '../../components/ItemsMenu/ItemsMenu'
import MenuOptionsNavBar from '../../components/Footer/NavBarOptions';
import GeneralButton from '../../components/Button/Button';
// import MealNavBar from '../../components/Header/MealNavBar'
import Header from '../../components/Header/Header';
import './style.scss';

const Menu = ()  => {
    // const[total, setTotal] = useState(0);
    // const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    // const [burger, setBurger] = useState([])
    const [itemsList, setItemsList] = useState([]);

    // const [addItem, setAddItem] = useState([]);
    // const [removeItem, setRemoveItem] = useState([]);
    const [values, setValues] = useState({
        'mesa': '',
        'cliente': '', 
    })

    const token = getStorageKey();

    useEffect(() => {
        getProducts()
        .then((res) => {                    
            setProducts(res)
            const breakfast = res.filter((item) => item.type === 'breakfast')
            setSelectedProducts(breakfast)
            // const burger = res.filter((item) => item.sub_type === 'hamburguer')
            // setBurger(burger);

            return res;
        })
        .catch((error) => console.log(error, 'Erro ao acessar a lista de produtos'))
    }, [token])

    const handleClick = (meal) => { 
        const selectedMenu = products.filter((item) => item.type === meal)
        setSelectedProducts(selectedMenu)  
        // const compileBurger = products.filter((item) => item.sub_type === 'hamburguer')
        // setBurger(compileBurger)     
    }

    const handleChange = (event) => {
        let {name, value} = event.target;
        setValues({
            ...values,
            [name]: value, 
        })
        console.log(value);
    }

    const deleteItem = (id) => {
        const index = itemsList.findIndex((item) => item.id === id)
        const updatedItemsList = [...itemsList]
        updatedItemsList.splice(index, 1);
        setItemsList(updatedItemsList)
    }

    const removeItemOfCart = (item) => {
        const summary = itemsList;
        const countElement = summary.find(element => element.id === item.id)

        if(countElement.qtd > 1) {
            countElement.qtd -= 1
            setItemsList(itemArray => itemArray
                .map(itemProduct => itemProduct.id === countElement.id ? countElement : itemProduct)
            )
        } else {
           deleteItem(item.id)
        }
    }

    // const removeItem = (item) => {
    //     if (item.qtd > 1) {
    //     return setItemsList((prevItems) => prevItems.map((prevItem) => {
    //         if (prevItem.id === item.id) {
    //         return {
    //             ...prevItem,
    //             qtd: prevItem.qtd - 1
    //         }
    //         }
    //         return prevItem
    //     }))
    //     }
    
    //     return setItemsList((prevItems) => prevItems
    //     .filter((prevItem) => prevItem.id !== item.id)
    //     )
    // }

    const addItemOnCart = (item) => {
        const countElement = itemsList.find(element => element.id === item.id)

        if(countElement) {
            countElement.qtd += 1
            setItemsList(itemArray => itemArray.map(
                itemProduct => itemProduct.id === countElement.id ? countElement : itemProduct)
            )
        } else {
            const newItem = { 
                id: item.id,
                name: item.name,
                price: item.price,
                flavor: item.flavor,
                complement: item.complement,
                qtd: 1,
            }
            setItemsList([...itemsList, newItem])
        }
    }

    // const addItem = (item) => {
    //     const hasElement = itemsList.some(({ id }) => id === item.id);
      
    //     if (hasElement) {
    //       return setItemsList((prevItems) => prevItems.map((prevItem) => {
    //         if (prevItem.id === item.id) {
    //           return {
    //             ...prevItem,
    //             qtd: prevItem.qtd + 1
    //           }
    //         }
    //         return prevItem
    //       }))
    //     }
      
    //     const newItem = {
    //       id: item.id,
    //       name: item.name,
    //       price: item.price,
    //       flavor: item.flavor,
    //       complement: item.complement,
    //       qtd: 1,
    //     }
    //     return setItemsList([...itemsList, newItem])
    //   }

    return (
        <>
            <Header />
            <main className="main">
                {/* <MealNavBar /> */}
                <div className="left-side">
                    <header className="select-menu-perMeal">
                        <GeneralButton variant="third" onClick={() => handleClick('breakfast')}>Café da manhã</GeneralButton>
                        <GeneralButton variant="third" onClick={() => handleClick('all-day')}>Almoço</GeneralButton>
                    </header>
                    <section className="products-list-perMeal" {...setSelectedProducts}>

                        {selectedProducts.map(item => 
                            (   
                                <ItemCard 
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    img={item.image}
                                    flavor={item.flavor}
                                    complement={item.complement}
                                    addItemOnCart={() => {
                                        addItemOnCart(item)
                                    }}
                                />  
                            )
                        )}
                    </section>
                </div>
                <div className="right-side cartList-display">
                    <section className="section-ordersList">
                        <article className="text-orders">
                            <h3 className="title-orders">Pedidos</h3>
                            <form className="form-inputs-order">
                                <label>Mesa</label>
                                <input className="input-order table" value={values.mesa} name="mesa" type="number" min="1" max="9" placeholder="0" onChange={handleChange}/> <br />
                                <label>Cliente</label>
                                <input className="input-order clientName" value={values.cliente} name="cliente" type="text" autoComplete="off" onChange={handleChange}/>
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
                                )
                            })}
                        </article>                        
                        <hr/>
                        <Total cartItems={itemsList} />
                        <GeneralButton variant="fifth" className="btn-confirmOrder">
                            Confirmar pedido
                        </GeneralButton>
                    </section>
                </div>
                <MenuOptionsNavBar /> 
            </main>
        </>
    )
};

export default Menu;
