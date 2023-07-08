import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import ProductDetails from "./components/products/ProductDetails";
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Search from "./components/layouts/Search";
import Login from "./components/user/Login";
import Register from "./components/layouts/Register";
import Cart from "./components/layouts/Cart";
import axios from 'axios';
import { useEffect, useState } from "react";
import Payment from "./components/layouts/Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ThankYou from "./components/layouts/ThankYou";
// import Add from "./components/layouts/Add";
import Delete from "./components/layouts/Delete";
import Update from "./components/layouts/Update";

function App() {

  const [stripeKey, setStripeKey] = useState('');

  useEffect(()=>{

    async function stripeApi()
    {
      try {
        const {data} = await axios.get('https://backend-martacart.onrender.com/api/stripeapi');
        setStripeKey(data.stripe_APi_key); 
      } catch (error) {
        setStripeKey("");
      }
    }
    stripeApi(); 

  },[])
   
  return (
    <div  style={{overflowX:'hidden'}} className="App" >
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/details/:id' component={ProductDetails} />
      <Route exact path = '/search/:keyword' component={Home} />
      <Route exact path = '/login' component={Login} />
      <Route exact path = '/register' component={Register} />
      <Route exact path = '/cart' component={Cart} />
      <Route exact path="/thankyou" component={ThankYou}  />
      {/* <Route exact path="/admin/add" component={Add} /> */}
      <Route exact path="/admin/delete" component={Delete} />
      <Route exact path="/admin/update" component={Update} />
      {stripeKey && 
      <Elements stripe={loadStripe(stripeKey)} > 
          <Route exact path= '/payment' component = {Payment} />
      </Elements>
      }      
      </Switch>
      <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;