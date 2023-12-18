import Card from './Card';
import './Plan.css'
import { useEffect, useState } from 'react'
import Arcade from '../assets/icon-arcade.svg';
import Advanced from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';
import { useContext } from 'react';
import SummaryContext from '../misc/SummaryContext';

export default function Plan () {

    const { selected, setSelected, yearly, setYearly } = useContext(SummaryContext);

    useEffect(() => {
        setYearly(false);
    }, []);
    
    const switchPeriod = (e) => setYearly(e.target.checked);

    return (
        <>
            <h3>Select your plan</h3>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="plan-cards">
                <Card image={Arcade} text="Arcade" price={9} selected={selected == 0} yearly={yearly} onClick={() => setSelected(0)} />
                <Card image={Advanced} text="Advanced" price={12} selected={selected == 1} yearly={yearly} onClick={() => setSelected(1)} />
                <Card image={Pro} text="Pro" price={15} selected={selected == 2} yearly={yearly} onClick={() => setSelected(2)} />
            </div>

            <div className="period-toggle">
                <p style={{ color: yearly ? 'var(--cool-gray)' : 'var(--marine-blue)' }}>Monthly</p>
                <label className="switch">
                    <input type="checkbox" onClick={switchPeriod} />
                    <span className="slider round"></span>
                </label>
                <p style={{ color: yearly ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>Yearly</p>
            </div>
        </>
    );
}
