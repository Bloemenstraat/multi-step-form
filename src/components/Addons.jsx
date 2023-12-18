import { useContext } from 'react';
import { useState } from 'react';
import './Addons.css'
import Checkcard from './Checkcard';
import SummaryContext from '../misc/SummaryContext';

export default function Addons () {

    const { checkedList, setCheckedList } = useContext(SummaryContext);

    const checkThis = (i) => {
        if (checkedList.includes(i))
            setCheckedList(checkedList.filter(e => e != i))
        else
            setCheckedList([...checkedList, i]);
    }

    return (
        <>
            <h3>Pick Add-ons</h3>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="checkcards">

            <Checkcard 
                label="Online service" 
                description="Access to multiplayer games" 
                price={1} 
                checked={checkedList.includes(0)}
                onClick={() => checkThis(0)}
            />

            <Checkcard 
                label="Larger storage" 
                description="Extra 1TB of cloud save" 
                price={2} 
                checked={checkedList.includes(1)}
                onClick={() => checkThis(1)}
            />

            <Checkcard 
                label="Customizable profile" 
                description="Custom theme on your profile" 
                price={2} 
                checked={checkedList.includes(2)}
                onClick={() => checkThis(2)}
            />
            </div>

        </>
    );
}
