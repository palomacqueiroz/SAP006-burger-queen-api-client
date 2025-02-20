import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../Pages/Register/RegisterForm'
import Login from '../Pages/Login/Login'
import Menu from '../Pages/Menu/Menu';
import OrderStatus from '../Pages/OrderStatus/OrderStatus'
import Kitchen from '../Pages/Kitchen/Kitchen'
import NotFound from '../Pages/NotFound/NotFound'
import PrivateRoute from './privateRoute';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={Register} />
                <PrivateRoute path='/menu' component={Menu} />
                <PrivateRoute path='/orders-status' component={OrderStatus} />
                <PrivateRoute path='/kitchen' component={Kitchen} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;