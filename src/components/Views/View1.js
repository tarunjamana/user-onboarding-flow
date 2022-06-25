import React from 'react';
import './view.scss';

function View1({value,setValue}) {
    return (
        <div style={{width:'100%'}}>
        <div className="input-container">
            <label className="input-container__label" htmlFor="fullName">Full Name</label>
            <input
             className="input-container__input"
             placeholder='Steve Jobs'
             value={value.fullName}
             onChange={(e) =>setValue({...value,'fullName':e.target.value})}
             type="text"
             id="fullName"
             minLength="2"
             maxLength="25"
             autoComplete='off'
            />
        </div>
        <div className="input-container">
            <label className="input-container__label" htmlFor="displayName">Display Name</label>
            <input
             className="input-container__input"
             placeholder='Steve'
             value={value.displayName}
             onChange={(e) =>setValue({...value,'displayName':e.target.value})}
             type="text"
             id="displayName"
             minLength="2"
             maxLength="12"
             autoComplete='off'
            />
        </div>
        </div>
    )
}

export default View1
