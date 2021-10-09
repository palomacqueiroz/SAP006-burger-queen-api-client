import { getInterval, getTime } from '../Time/Date';

export const TimeOrPrepareTime = ({ createdAt, processedAt, updatedAt  }) => {
  if (processedAt) {
    return (
      <>
        <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
        <label className='orderLabel'>Tempo de preparo:</label>{' '}
        <p> {getInterval(createdAt, updatedAt)} </p>
      </>
    );
  }

  return (
    <>
      <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
    </>
  );
};