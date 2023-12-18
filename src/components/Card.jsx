import './Card.css'

export default function Card ({ image, text, price, selected, yearly, onClick }) {

    return (
        <div className={ selected ? "card-selected" : "card" } onClick={onClick} >
            <img src={image} />

            <div className="card-text">
                <h6>{ text }</h6>
                <p>{ yearly ? `$${price*10}/year` : `$${price}/month` }</p>
                { yearly && <p style={{ color: '#03295A' }}>2 months free</p> }
            </div>
        </div>
    );
}
