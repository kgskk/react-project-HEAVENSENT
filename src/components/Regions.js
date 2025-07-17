import React from 'react';
import { useParams } from 'react-router-dom';
import './Regions.css'

const Regions = ({ regions }) => {
  const { name } = useParams();
  const region = regions.find(region => region.name === name);

  if (!region) {
    return <div>Область не знайдена</div>;
  }

  return (
    <div className="region-page">
      <div className='region-info'>
        <div className='region-name'>
          {region.name} область
        </div>
        <div className='region-info-box'>
          <div className='region-progres-box'>
            <div className='region-progres'>LvL: {region.level}</div>
          <div className='region-progres'>XP: {region.price}</div>
          </div>
          <progress max="100" value="60"></progress>
        </div>
      
      </div>
      
        {region.cards.map((card, index) => (
          <div key={index} className='card-container'>
            <div className='card-box'>
              <h2 className='card-name'>{card.name}</h2>
              <div className='card-info'>
                <p>XP: {card.xp}</p>
                <p>Прибуток/год: {card.profit.kazna}</p>
                <p>Енергія/год: {card.profit.xp}</p>
                <p>Ціна: {card.price}</p>
              </div>
              <div className='card-button'>
                  Придбати
              </div>
            </div>
            <img className='card-img' src={card.image} alt=""/>
          </div>
        ))}
    </div>
  );
};

export default Regions;