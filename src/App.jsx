import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Plan from './components/Plan'
import Addons from './components/Addons'
import Summary from './components/Summary'
import Step from './components/Step'
import Thanks from './components/Thanks'
import SummaryContext from './misc/SummaryContext'
import { useForm } from "react-hook-form"

function App() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const [ page, setPage ] = useState(0);

    const [ selected, setSelected ] = useState(0);
    const [ yearly, setYearly ] = useState(false);
    const [ checkedList, setCheckedList ] = useState([]);
    
    const next = () => setPage(page + 1);
    const back = () => setPage(page - 1);
    const change = () => setPage(1);
    const validate = () => next();


    return (
        <>
            <main>
                <div className="sidebar">
                    <Step i={1} text="YOUR INFO" selected={page == 0} />
                    <Step i={2} text="SELECT PLAN" selected={page == 1} />
                    <Step i={3} text="ADD-ONS" selected={page == 2} />
                    <Step i={4} text="SUMMARY" selected={page == 3} />
                </div>

                <div className="content">
                    <div className="scaffold">
                        <SummaryContext.Provider value={{ selected, setSelected, yearly, setYearly, checkedList, setCheckedList }}>
                        { page == 0 && <Info errors={errors} register={register} /> }
                        { page == 1 && <Plan /> }
                        { page == 2 && <Addons /> }
                        { page == 3 && <Summary onClick={change} /> }
                        { page == 4 && <Thanks /> }
                        </SummaryContext.Provider>
                    </div>
                    
                    <div className="buttonbar">
                        <button className="back" onClick={back} style={{ visibility: (page == 0 || page > 3) ? 'hidden' : 'visible' }}>Go Back</button> 
                        { (page < 3 && page > 0) && <button className="next" onClick={next}>Next Step</button> }
                        { page == 0 && <button className="next" onClick={handleSubmit(validate)}>Next Step</button> }
                        { page == 3 && <button className="confirm" onClick={next}>Confirm</button> }
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
