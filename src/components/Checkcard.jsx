import './Checkcard.css'
import SummaryContext from '../misc/SummaryContext';
import { useContext } from 'react';

export default function Checkcard ({ label, description, price, checked, onClick }) {

    const { yearly } = useContext(SummaryContext);

    return (
        <div className={ checked ? "checkcard-selected" : "checkcard" } onClick={onClick} >
            <div className="customcheck">
                <div className={ checked ? "checkmark-selected" : "checkmark" }></div>
                <div>
                    <p style={{ color: '#03295A', fontWeight: 'bold' }}>{ label }</p>
                    <p>{ description }</p>
                </div>
            </div>

            <div>
                <p style={{ color: '#483EFF' }}>{yearly ? `+$${price*10}/yr` : `+$${price}/mo`}</p>
            </div>

        </div>
    );
}