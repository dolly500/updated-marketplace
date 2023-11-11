import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import HomeScreen from './screens/homeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import CategoryList from './components/Categories/CategoryList'
import Form from './components/Form/File';
import Cart from './components/Cart/Cart'
import Livechat from './components/LiveChat/livechat'
import Product from './components/Products/products'



function App() {
  
  return (
    <Router>
      <Layout >
        <Route path="/" exact> <HomeScreen /> </Route>
        <Route path="/categories"> <CategoryList /> </Route>
        <Route path="/admin"> <Form /> </Route>
        <Route path="/cart"> <Cart /> </Route>
        <Route path="/livechat"> <Livechat /> </Route>
        <Route path="/products"> <Product />  </Route>
    </Layout>
    </Router>
  )
}

export default App
