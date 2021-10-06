import { getInterval, getTime } from '../Time/Date';

export const TimeOrPrepareTime = ({ createdAt, processedAt, updatedAt  }) => {
  console.log(processedAt, 'processedAt')  
  console.log(createdAt, "createdAt")  
  console.log(updatedAt, "updatedAt")  
  // if (processedAt) {
  //   return (
  //     <>
  //       <label className='orderLabel'>Tempo de preparo:</label>{' '}
  //       <p> {getInterval(processedAt, createdAt)} </p>
  //     </>
  //   );
  // }
  const cronometro = () => {
    {getInterval(processedAt, createdAt)}
  }

  return (
    <>
      <p className='orderLabel'>Pedido feito às: {getTime(createdAt)}</p>{' '}
      <p>Tempo de preparo: {cronometro()}</p>
    </>
  );
};