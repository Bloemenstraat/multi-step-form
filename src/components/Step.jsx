import './Step.css'

export default function Step ({ i, text, selected }) {

    let mobile = false;

    if (document.documentElement.clientWidth <= 375)
        mobile = true;


    return (
        <div className="step">
            <div className={ selected ? "selected-number" : "number" }>{i}</div>
            {!mobile && <div className="description">
                <p>Step {i}</p>
                <p>{ text }</p>
            </div>}
        </div>
    );
}
