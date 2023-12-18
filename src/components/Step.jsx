import './Step.css'

export default function Step ({ i, text, selected }) {

    return (
        <div className="step">
            <div className={ selected ? "selected-number" : "number" }>{i}</div>
            <div className="description">
                <p>Step {i}</p>
                <p>{ text }</p>
            </div>
        </div>
    );
}
