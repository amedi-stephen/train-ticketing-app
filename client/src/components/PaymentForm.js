import React from 'react';

const PaymentForm = () => {
    return (
        <form>
            <input type="text" placeholder="card owner" />
            <input type="text" placeholder="card number" />
            <input type="text" placeholder="expiration date" />
            <button type="submit">Confirm Payment</button>
        </form>
    );
}
 
export default PaymentForm;