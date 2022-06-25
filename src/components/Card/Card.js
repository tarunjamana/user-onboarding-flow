import React from 'react';
import './card.scss';
import user from '../../assets/icons/user.png';
import group from '../../assets/icons/group.png';

function Card({value,card,isActive,setValue}) {

    function handleCardSelect(){
        setValue({...value,'usage':card.id});
    }
    return (
        <div 
        className="card"
        onClick={handleCardSelect}
        style={{ border: isActive ? "2px solid #5A4AD1": "2px solid #e2ebf6" }}
        >
        <img style={{marginBottom:'0.7rem'}} 
        src={card.id === 1 ? user : group} 
        alt={card.title} height="20rem" width="20rem"/>
        <span className="card__content__title">{card.title}</span>
        <span className="card__content__text">{card.text}</span>
        </div>
    )
}

export default Card
