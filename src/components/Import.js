import React from 'react';
import { useParams } from 'react-router-dom';
import './Import.css';

const Import = ({imp}) => {
  return (
    <div className="import-page">
      <div className='import-info1'>
        <div className='import-name1'>
          Імпорт
        </div>
        

      </div>

    {imp.map((card, index) => (
       <div key={index} className='import-container'>
        <div className='import-box'>
          <h2 className='import-name'>{card.name}</h2>
          <div className='import-info'>
            <p>Відносини: {card.friendship}</p>
            <p>Кількість: {card.count}</p>
            <p>Ціна: {card.price}</p>
          </div>
          <div className='import-button'>
            Придбати
          </div>
        </div>
        <img className='import-img' src={card.image} alt="" />
      </div>
    ))}
     

    </div>
  );
};

export default Import;