import { getInterval, getTime } from '../Time/Date';

export const TimeOrPrepareTime = ({ createdAt, processedAt, updatedAt  }) => {
  console.log(processedAt, 'processedAt')  
  console.log(createdAt, "createdAt")  
  console.log(updatedAt, "updatedAt")  
  if (processedAt) {
    return (
      <>
        <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
        <label className='orderLabel'>Tempo de preparo:</label>{' '}
        <p> {getInterval(createdAt, processedAt)} </p>
      </>
    );
  }

  return (
    <>
      <p className='orderLabel'>Pedido feito em: {getTime(createdAt)}</p>{' '}
      {console.log(createdAt)}
    </>
  );
};