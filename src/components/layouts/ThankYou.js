import React from 'react'

function ThankYou() {

    sessionStorage.removeItem('cart');

    return (
        <>
        <div className="Container" style={{textAlign:'center'}}>
            <h2 className="mt-5">Thank You For Buying Product From Us</h2>
            <h4 className="mt-5">We Hope to see You soon!</h4>
            <h5 className="mt-5">You will get the product within 4-5 bussiness Days.</h5>
            <h6 className="mt-5">We have your address so don't worry about it.</h6>
        </div>
        </>
    )
}

export default ThankYou
