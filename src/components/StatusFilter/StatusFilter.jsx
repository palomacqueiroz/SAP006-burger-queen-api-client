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
                <Icon icon="akar-icons:circle-alert-fill" color="#b42121" />
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={preparingOrders}>
                <Icon icon="akar-icons:triangle-alert-fill" color="#ffdca8" />
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={doneOrders}>
                <Icon icon="akar-icons:circle-check-fill" color="#aad253" />
            </GeneralButton>
            <GeneralButton variant="tenth" onClick={allOrders}>
                <img className="eye" src={eye} alt="all orders" />
            </GeneralButton>
        </nav>
    )
}