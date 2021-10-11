import './style.scss';
import { Link } from 'react-router-dom';
import wallpaper404 from '../../Assets/404.jpg';

const NotFound = () => {

    return (
        <section className='div-style'>
            <h1 className="title404">404 Não sei, só sei que foi assim</h1>
            <h3 className="subtitle404">Vixi! Parece que essa página não existe mais.</h3>
            <h4 className="return404">Dê meia volta e entre nessa birosca 
                <Link to="/login" className="link404"> AQUI</Link>
            </h4>
            <img className="bg404" src={wallpaper404} alt="404 wallpaper"/>
        </section>
    )
}

export default NotFound;