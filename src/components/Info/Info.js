import './Info.css';

const Info = ({totalNumber, increasedPaymentNumber}) => {
  return (

    <div className='app-info'>
      <h1> Учет сотрудников компании ООО "Рога и Копыта" </h1>
      <h2> Общее число сотрудников: {totalNumber}</h2>
      <h2> Премию получат: {increasedPaymentNumber}</h2>
    </div>
  );
}

export default Info;