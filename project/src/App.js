import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Login from   './component/Login';
import Adminlogin from './component/Adminlogin';
import Tenda from './component/Tenda';
import SignUp from './component/SignUp';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Detail from './component/Detail';
import ProfileUser from './component/UserProfile';
import UserProfile from './component/UserProfile';
import Invoice from './component/Invoice';
import Admin from './component/Admin';



class App  extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Adminlogin' component={Adminlogin} />
        <Route path='/Tenda' component={Tenda} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Cart' component={Cart} />
        <Route path='/Checkout' component={Checkout} />
        <Route path='/Detail' component={Detail} />
        <Route path='/UserProfile' component={UserProfile} />
        <Route path='/Invoice' component={Invoice} />
        <Route path='/Admin' component={Admin} />
        


      <Footer/>
      </div>
    );
  }
}

export default App;