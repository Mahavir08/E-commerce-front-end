import React from 'react'
import axios from 'axios';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';

const Payment = () => {

    const stripe = useStripe();
    const elements = useElements();
    const price = sessionStorage.getItem('price');
    const stock = sessionStorage.getItem('stock');

    const amount = price * stock;
    const stripeAmount = amount * 100;

    const submitHandler = async (e) => {
        e.preventDefault();

        const { data } = await axios.post('https://backend-martacart.onrender.com/api/payment/process', { amount: stripeAmount })

        const clientSecret = data.client_secret;

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        });


        if (result.paymentIntent.status === 'succeeded') {
            window.location.href = '/thankyou';
            sessionStorage.removeItem('price');
            sessionStorage.removeItem('stock');
            sessionStorage.removeItem('productId');
        }
        else {
            window.alert('Error While Making Payments');
        }
}

    return (
        <>
            <div className="mt-5" style={{ textAlign: 'center' }}>
                <h4>Payment Gateway</h4>
            </div>
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <form onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <label className="mb-3">Full Name</label>
                            <input type="text" className="form-control mb-3" placeholder="Full Name" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-3">Card Number</label>
                            <CardNumberElement type="number" className="form-control mb-3" placeholder="Card Number" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-3">Expiry Date</label>
                            <CardExpiryElement type="number" className="form-control mb-3" placeholder="Card Number" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-3">CVC</label>
                            <CardCvcElement type="password" className="form-control mb-3" placeholder="CVC" />
                        </div>
                        <button id="button" type="submit" class="btn btn-warning mb-3">Pay - {`${amount}`}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Payment
