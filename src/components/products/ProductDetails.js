import React, { useEffect, useState } from "react";
import Loader from "../layouts/Loader";
import { Carousel } from "react-bootstrap";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, clearError } from "../../actions/productActions";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const Decrement = () => {
    if (count !== 0) {
        setCount(count - 1);
    }
}

let products = [];
const handleCart = (e) => {

    window.location.reload();
    const num = count

    if (JSON.parse(sessionStorage.getItem('productId')) === null) {
        products.push(product);            
    }
    else {
        products = JSON.parse(sessionStorage.getItem('productId'));
        products.push(product);            
    }
    
    if (num > 0) {            
        sessionStorage.setItem('productId', JSON.stringify(products));              
        const arr2 = JSON.parse(sessionStorage.getItem('productId'));
        const arr2length = arr2.length;
        sessionStorage.setItem('cart',arr2length);
        sessionStorage.setItem('stock',num);
    }
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={product.name} />

          <div className="container-fluid" style={{marginTop:"5%"}}>
                <div className="row mt-5">

                    <div className="offset-md-1 col-md-4" >
                        <img src={product.image} alt="Product" width="99%" />
                    </div>
                    <div className="col-md-4" style={{ marginLeft: '3%' }} >
                        <h3>{product.name}</h3>
                        <p style={{ color: '#a6a6a6' }}># {product._id}</p>
                        <hr />
                        <p>Reviews (...)</p>
                        <hr />
                        <h5>Rs. {product.price} </h5>
                        <br />
                        <button className="btn btn-danger" onClick={() => Decrement()} >-</button>
                        <span style={{ marginLeft: '2%' }} > {count} </span>
                        <button className="btn btn-primary" style={{ marginLeft: '2%' }} onClick={() => setCount(count + 1)} >+</button>
                        <button type="submit" className="btn btn-warning" style={{ marginLeft: '5%', borderRadius: '19px' }} onClick={handleCart}>Add To Cart</button>
                        <hr />
                        <p>Status : <span><b>In Stock</b></span></p>
                        <hr />
                        <h4>Description : </h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
