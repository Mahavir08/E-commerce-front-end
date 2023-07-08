import React from 'react'

function Cart() {

    const ProductDetail = JSON.parse(sessionStorage.getItem('productId'));
    const stock = sessionStorage.getItem('stock');

    const remove = (id) => {
        const arr1 = JSON.parse(sessionStorage.getItem('productId'));
        console.log(arr1);
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i]._id === id) {
                arr1.splice(i, 1);
            }
            sessionStorage.setItem('productId', JSON.stringify(arr1));
        }
        var cart = sessionStorage.getItem('cart');
        cart = cart - 1;
        sessionStorage.setItem('cart', cart);
        window.location.reload();
    }

    const clearCart = () => {
        window.location.reload();
        sessionStorage.removeItem('productId');
        sessionStorage.removeItem('cart');
    }

    const handleBuy = (price) => {
        sessionStorage.setItem('price',price);
        window.location.href="/payment";
    }


    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h3>Cart</h3>

                <div className="container">
                    <div className="row mt-5">
                        {ProductDetail && ProductDetail.map(data => (
                            <>                                
                                <div className="col-md-2">
                                    <img src={data.image} width="99%" alt="product_image" />
                                </div>
                                <div className="col-md-2 mt-4">
                                    <h5>{data.name}</h5>
                                </div>
                                <div className="col-md-1 mt-4">
                                    <h5>{data.price}</h5>
                                </div>
                                <div className="col-md-1 mt-4">
                                    <h5>{stock}</h5>
                                </div>
                                <div className="offset-md-4 col-md-1 mt-4">
                                    <h5><button className="btn btn-danger" onClick={() => remove(data._id)}>Remove</button></h5>
                                </div>
                                <div className="col-md-1 mt-4">
                                    <h5><button className="btn btn-warning" onClick={() => handleBuy(data.price)}>Buy</button></h5>
                                    <br /><br /><br /><br /><br />
                                </div>
                            </>
                        )
                        )}

                    </div>
                </div>

                <button className="btn btn-danger" type="submit" onClick={clearCart} >Clear Cart</button>
            </div>


        </>
    )
}

export default Cart
