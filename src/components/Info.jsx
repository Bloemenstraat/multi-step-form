import { useEffect } from 'react';
import './Info.css'

export default function Info ({ errors, register }) {

    useEffect(() => {
        console.log(errors.name )
    }, [errors.name]) 

    return (
        <>
            <h3>Personal info</h3>
            <p>Please provide your name, email address and phone number.</p>

            <form>
                <label>
                    <span>Name</span>
                    { errors.name && <span className='error-message'>{ errors.name.type == "required" ? 'Required' : 'Wrong format' }</span> }
                    
                </label>
                <input 
                    className={ errors.name ? 'input-error' : ''}
                    placeholder="e. g. Stephen King" 
                    {...register("name", { required: true, pattern: /^[a-zA-Z ]{2,20}$/ })} />
                
                <label>
                    <span>Email Address</span>
                    { errors.email && <span className='error-message'>{ errors.email.type == "required" ? 'Required' : 'Wrong format' }</span> }
                </label>
                <input 
                    className={ errors.email ? 'input-error' : ''}
                    placeholder="e. g. stephenking@lorem.com" 
                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />

                <label>
                    <span>Phone Number</span>
                    { errors.phone && <span className='error-message'>{ errors.phone.type == "required" ? 'Required' : 'Wrong format' }</span> }
                </label>
                <input 
                    className={ errors.phone ? 'input-error' : ''}
                    placeholder="e. g. +1 234 567 890" 
                    {...register("phone", { required: true, pattern: /^\+[0-9]{1,3} ?([0-9] ?){9}$/ })} />
            </form>
        </>
    );
}
