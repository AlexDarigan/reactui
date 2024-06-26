import React from 'react';
import ReactDOM from 'react-dom/client';
import Scaffold from './layout/Scaffold';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Browse from './pages/Browse';
import ViewCard from './pages/ViewCard';
import Orders from "./pages/Orders";
import Inbox from './pages/Inbox';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Scaffold/>}>
      <Route index element={<Signup/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="browse" element={<Browse/>}/>
      <Route path="card" element={<ViewCard/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path="inbox" element={<Inbox/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

     // ViewCard & Offers
      // Trading Section (Offer/Counter-Offer)
      // Upload Inventory