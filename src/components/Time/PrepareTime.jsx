import { getInterval, getTime } from '../Time/Date';

export const TimeOrPrepareTime = ({ order }) => {
  if (order.orderProcessedAt) {
    return (
      <>
        <label className='orderLabel'>Tempo de preparo:</label>{' '}
        <p> {getInterval(order.orderCreatedAt, order.orderProcessedAt)} </p>
      </>
    );
  }

  return (
    <>
      <label className='orderLabel'>Horário:</label>{' '}
      <p> {getTime(order.createdAt)} </p>
    </>
  );
};