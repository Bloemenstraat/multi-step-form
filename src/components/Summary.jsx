import { useContext } from 'react';
import './Summary.css'
import SummaryContext from '../misc/SummaryContext';


export default function Summary ({ onClick }) {

    const { selected, setSelected, yearly, setYearly, checkedList, setCheckedList } = useContext(SummaryContext);
    const period = yearly ? 'Yearly' : 'Monthly';

    let plan, price, total;

    switch (selected) {
        case 0:
            plan = 'Arcade';
            price = 9;
            break;
        case 1:
            plan = 'Advanced';
            price = 12;
            break;
        case 2:
            plan = 'Pro';
            price = 15;
            break;
    }

    total = price;

    if (checkedList.includes(0))
        total += 1
    if (checkedList.includes(1))
        total += 2
    if (checkedList.includes(2))
        total += 2

    return (
        <>
            <h3>Finishing up</h3>
            <p>Double-check everything looks OK before confirming.</p>

            <div className="bill">
                <div className="line plan-line">
                    <div className="change-plan">
                        <h6>{`${plan} (${period})`}</h6>
                        <a onClick={onClick} >Change</a>
                    </div>
                    <p>{yearly ? `$${price*10}/yr` : `$${price}/mo`}</p>
                </div>

                { checkedList.length > 0 && <div className="separator"></div> }

                { checkedList.includes(0) &&
                <div className="line addonline">
                    <p>Online service</p>
                    <p>{yearly ? `+$10/yr` : `+$1/mo`}</p>
                </div>
                }

                { checkedList.includes(1) &&
                <div className="line addonline">
                    <p>Larger storage</p>
                    <p>{yearly ? `+$20/yr` : `+$2/mo`}</p>
                </div>
                }

                { checkedList.includes(2) &&
                <div className="line addonline">
                    <p>Customizable profile</p>
                    <p>{yearly ? `+$20/yr` : `+$2/mo`}</p>
                </div>
                }

            </div>

            <div className="line total">
                <p>Total (per {yearly ? 'year' : 'month'})</p>
                <p>{yearly ? `$${total*10}/yr` : `$${total}/mo`}</p>
            </div>
        </>
    );
}
