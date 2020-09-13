import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from  './screens/ProductsScreen';
import { useSelector } from 'react-redux';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {

  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
   
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
<BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className= "brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">GoHorse.br</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Carrinho</a>
            {
                userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                <Link to="/signin">Entrar</Link>
            }
            {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                    <a href="#" className="dropdown">Administrador</a>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/orders">Ordens de Compra</Link>
                            <Link to="/products">Produtos</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </header>
    <aside className="sidebar">
        <h3>Categorias</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className="categories">
            <li>
                <Link to="/category/Pants">Pants</Link>
            </li>
            <li>
                <Link to="/category/Shirts">Shirts</Link>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route path="/orders" component={OrdersScreen}/>
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/products" component={ProductsScreen}/>
          <Route path="/shipping" component={ShippingScreen}/>
          <Route path="/payment" component={PaymentScreen}/>
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/category/:id" component={HomeScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>
           
        </div>
    </main>
    <footer className="footer">
       <li>Todos os direitos reservados</li> 
       <li>IFSP Pós Desenvolvimento Web</li>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
