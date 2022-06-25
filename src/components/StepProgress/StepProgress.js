import React from 'react';
import './stepProgress.scss'

function StepProgress({page , steps, handleClick}) {
    let numSteps

    if(steps  === null || undefined){
        numSteps =arrayofDigits(steps)
    } else {
        numSteps = arrayofDigits(4)
    }

      // Convert Number to array
  function arrayofDigits(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

    return (
        <div className="stepper">
            <ul className="steps">
               {numSteps.map((item) =>{
                   return (
                       <li
                        className={
                            (page === item)
                            ? 'step step__incomplete step__active' 
                            : page < item
                               ? 'step step__incomplete step__inactive'
                               : 'step step__complete step__inactive'
                        }
                        key={item}
                        onClick={() =>  handleClick(item) }
                       >
                        <span className="step__icon">{item}</span>
                       </li>
                   )
               })}
            </ul>
            
        </div>
    )
}

export default StepProgress
