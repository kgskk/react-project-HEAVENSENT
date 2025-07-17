import React from 'react';
import './Export.css';

const Export = ({exp}) => {
  return (
    <div className="Export-page">
      <div className='Export-info1'>
        <div className='Export-name1'>
          Експорт
        </div>
        

      </div>

    {exp.map((card, index) => (
       <div key={index} className='Export-container'>
        <div className='Export-box'>
          <h2 className='Export-name'>{card.name}</h2>
          <div className='Export-info'>
            <p>Відносини: {card.friendship}</p>
            <p>Кількість: {card.count}</p>
            <p>Ціна: {card.price}</p>
          </div>
          <div className='Export-button'>
            Придбати
          </div>
        </div>
        <img className='Export-img' src={card.image} alt="" />
      </div>
    ))}
     

    </div>
  );
};

export default Export;