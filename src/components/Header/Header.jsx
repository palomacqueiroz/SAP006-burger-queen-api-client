import { useHistory, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { removeStorageKey } from '../../services/storage';
import vixiCangaço from '../../Assets/burger.png';
import vixiKitchen from '../../Assets/logodesktop.png';
// import { getRouteHeaderMenu } from '../../routes/redirections';
import './style.scss'

const Header = () => {
    const history = useHistory();

    // const handleRoute  = (path) => {
    //     const route = getRouteHeaderMenu(path)
    //     history.push(route)
    // }

    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }

    return (
        <nav className="header-navbar-desktop">
            <img className="logo" src={vixiCangaço} alt='icon-vixi' />
            {/* <h2 className="header-title">VIXI!</h2> */}
            <Link to='/menu' className="header-button">CARDÁPIO</Link>
            <Link to='/orders-status' className="header-button">STATUS DOS PEDIDOS</Link>
            <button className="header-button" onClick={handleLogout}><Icon icon="carbon:logout" color="black" /></button>
        </nav>
    )
}

const HeaderKitchen = () => {
    const history = useHistory();
    const handleLogout = () => {
        removeStorageKey();
        history.push('./')  
    }
    
    return (
        <nav className="header-navbar-desktop">
            <img className="logoKitcken" src={vixiKitchen} alt='icon-vixi' />
            {/* <h2 className="header-title">VIXI!</h2> */}
            <h2 className="header-title-kitchen">Cozinha • Pedidos</h2>
            <button className="header-button" onClick={handleLogout}><Icon icon="carbon:logout" color="black" /></button>
        </nav>
    )
}

export { Header, HeaderKitchen };