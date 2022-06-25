import React from 'react';
import './view.scss';
import Card from '../Card/Card';

function View3({value,setValue}) {

    const usageCards = [
        {
          id: 1,
          title: 'For myself',
          text: 'Write better. Think more clearly. Stay organized.'
        },
        {
          id: 2,
          title: 'With my team',
          text: 'Wikis, docs, tasks & projects, all in one place.'
        }
      ];

    return (
        <div className="view-3">
            <div className="cards-container">
            {usageCards.map((card) => {
                return <Card key={card.id} value={value} isActive={card.id === value.usage} card={card} setValue={setValue} /> 
              })}
            </div>
        </div>
    )
}

export default View3
