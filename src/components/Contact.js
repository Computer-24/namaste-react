import React from 'react';

const Contact = () => {
    return (
        <div className={'font-bold text-xl p-4 m-4'}>
            <h1>Contact us</h1>
            <form>
                <input className={'border border-black p-2 my-2'} type='text' placeholder='Name' />
                <input className={'border border-black p-2 m-2'} type='text' placeholder='Message' />
                <button className={'border border-black p-2 m-2 bg-green-400 rounded'} type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;