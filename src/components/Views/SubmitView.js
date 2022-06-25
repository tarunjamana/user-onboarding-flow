import React from 'react';
import check from '../../assets/icons/check.PNG';

function SubmitView({value}) {
    return (
        <div className="submit-view">
            <div className="submit-view__img">
            <img src={check} alt="check" />
            </div>
            <span style={{ fontSize: '2rem', marginBottom: '1rem', 
                  fontWeight: '600', color: 'var(--color-primary-text-dark)'}}>
                  Congratulations, {value.displayName}!
            </span>
            <span style={{ fontSize: '.9rem', marginBottom:'2rem', 
                  color: 'var(--color-primary-text-medium)' }}>
                  You have completed onboarding, you can start using the Eden!
            </span>
        </div>
    )
}

export default SubmitView
