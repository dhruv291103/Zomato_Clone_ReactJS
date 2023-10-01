import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Footer from './Footer';
// import Header from './Header'
import Home from '../Component/Home/Home'
import Listing from '../Component/listing/listing'
import Details from '../Component/Details/details'
import PlaceOrder from '../Component/orders/placeOrder';
import viewOrder from '../Component/orders/viewOrder';
import Login from './login/Login'
import Register from './login/Register'

const Routing = () => {
    return(
        <BrowserRouter>
        {/* <Header /> */}
        <Route exact path="/" component={Home}/>
        <Route path="/listing/:mealId" component={Listing}/>
        <Route path="/details" component={Details}/>
        <Route path="/viewBooking" component={viewOrder}/>
        <Route path="/placeOrder/:restName" component={PlaceOrder}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Footer />
        </BrowserRouter>
    )


}

export default Routing;