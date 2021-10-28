import { getInterval, getTime } from '../Time/Date';

export const TimeOrPrepareTime = ({ createdAt, processedAt, updatedAt  }) => {
  if (processedAt) {
    return (
      <>
        <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
        <label className='orderLabel'>Tempo de preparo:</label>{' '}
        <p className='orderLabel'> {getInterval(createdAt, updatedAt)} </p>
        <hr className="line-card"/>
      </>
    );
  }

  return (
    <>
      <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
    </>
  );
};