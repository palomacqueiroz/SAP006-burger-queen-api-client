import GeneralButton from '../Button/Button'
import { Icon } from '@iconify/react';
import eye from '../../Assets/eye.png';
import './style.scss';

export const StatusFilter = ({
    allOrders,
    pendingOrders,
    preparingOrders,
    doneOrders
}) => {

    return (
        <nav className="statusFilter-bar">
            <GeneralButton variant="tenth" onClick={pendingOrders}>
                <Icon className="icon-bar" icon="akar-icons:circle-alert-fill" color="#b42121" />
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={preparingOrders}>
                <Icon className="icon-bar" icon="akar-icons:triangle-alert-fill" color="rgb(255 246 35)"/>
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={doneOrders}>
                <Icon className="icon-bar" icon="akar-icons:circle-check-fill" color="#587b0a" />
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={allOrders}>
                <img className="eye" src={eye} alt="all orders" />
            </GeneralButton>
        </nav>
    )
}