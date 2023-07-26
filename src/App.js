import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      name: 'Fancy Product',
      seller: 'AMZ Seller Ghz',
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      
      category: 'Shoes',
      
      price:  45
    },
    {
      url: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 18
    },
    {
      url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Sale Item',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 250
    },
    {
      url: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: ' Popular item',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 40
    },
    {
      url: 'https://images.unsplash.com/photo-1599423256402-939fc3e8112d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
      name: 'Sale item',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 25
    },
    {
      url: 'https://images.unsplash.com/photo-1519640350407-953bc0614f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      name: 'Fancy Product',
      category: 'Guitar',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://images.unsplash.com/photo-1483103068651-8ce44652c331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Special item',
      category: 'Cap',
      seller: 'ABS Ltd',
      price: 18
    },
    {
      url: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      name: 'Popular',
      category: 'Gift',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;

