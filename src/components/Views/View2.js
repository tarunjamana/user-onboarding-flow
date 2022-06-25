import React from 'react';
import './view.scss';

function View2({value,setValue}) {
    return (
        
        <div style={{width:'100%'}}>

        <div className="input-container">
            <label className="input-container__label" htmlFor="workspaceName">Workspace Name</label>
            <input
             className="input-container__input"
             placeholder='Eden'
             value={value.workspaceName}
             onChange={(e) =>setValue({...value,'workspaceName':e.target.value})}
             type="text"
             id="workspaceName"
             minLength="2"
             maxLength="25"
             autoComplete='off'
            />
        </div>

       <div className="input-container">
       <div className="workspace-url-label">
        <label className="input-container__label" htmlFor="workspaceURL">Workspace URL</label>
        <span style={{ 
         fontSize: '1rem',
         marginLeft:'.2rem',
         color:'var(--color-primary-text-medium)'}}
        >
        (optional)
       </span>

        </div>

        <div className="workspace-Url">
            <div className="workspace-Url__default">
            www.eden.com/   
            </div>
            <input 
            className="workspace-Url__input"
            id="workspaceURL"
            placeholder="example"
            value={value.workspaceURL}
            onChange={(e) =>setValue({...value,'workspaceURL':e.target.value})}
            minLength="2"
            maxLength="20"
            type="text"
            autoComplete='off'
            />
        </div>
       </div>


        </div>
    
    )
}

export default View2
