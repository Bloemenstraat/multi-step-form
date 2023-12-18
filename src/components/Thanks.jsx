import './Thanks.css'
import ThanksIcon from '../assets/icon-thank-you.svg';

export default function Thanks () {
    
    return (
        <div className="thanks-section">
            <div className="thanks-content">
                <img src={ThanksIcon} />
                <h4>Thank you!</h4>
                <p>  
                    Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}
