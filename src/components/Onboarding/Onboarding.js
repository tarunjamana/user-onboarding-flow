import React,{useState} from 'react';
import './onboarding.scss';
import View1 from '../Views/View1';
import View2 from '../Views/View2';
import View3 from '../Views/View3';
import SubmitView from '../Views/SubmitView';
import StepProgress from '../StepProgress/StepProgress';

function Onboarding() {
    const [page,setPage] = useState(1);

    const tabHeadings = [
        {
          tab: 1,
          main: "Welcome! First things First...",
          sub: "You can always change them later."
        },
        {
          tab: 2,
          main: "Let's set up a home for all your work",
          sub: "You can always create another workspace later."
        },
        {
          tab: 3,
          main: "How are you planning to use Eden?",
          sub: "We'll streamline your setup experience accordingly."
        },
        {
          tab: 4,
          // main: "",
          // sub: ""
        }
      ];

    //   States
    const [formState, setFormState] = useState({
        fullName: '',
        displayName: '',
        workspaceName: '',
        workspaceURL: '',
        usage: '',
      });


    function handlePage(item){
     setPage(item);
    }

    function incrementPage(){
        if(page === 4) return;
        setPage((p) => p +1);
    }

    return (
        <div className="Onboarding">
        <StepProgress page={page} steps={4} handleClick={handlePage} />

        {tabHeadings[page-1].main && 
            <div className="pageHeader">
              <span className="pageHeader__main">{tabHeadings[page-1].main}</span>
              <span className="pageHeader__sub">{tabHeadings[page-1].sub}</span>
            </div>    
        }

        <div className="form_section">
        {
        page === 1 ?<View1 value={formState} setValue={setFormState}/>:
        page === 2 ?<View2 value={formState} setValue={setFormState}/>:
        page === 3 ?<View3 value={formState} setValue={setFormState}/>:
        <SubmitView value={formState} />
        }
        </div>

         <button className="submitButton" onClick={incrementPage}>{page<4?'Create Workspace':'Launch Eden'}</button>
        </div>
    )
}

export default Onboarding
