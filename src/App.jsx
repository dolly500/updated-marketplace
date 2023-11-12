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
import SignIn from './components/SignIn/signin'
import SignUp from './components/SignUp/signup'




function App() {
  
  return (
    <Router>
      <Layout >
      <Route path="/" exact component={HomeScreen} />
          <Route path="/categories" component={CategoryList} />
          <Route path="/admin" component={Form} />
          <Route path="/cart" component={Cart} />
          <Route path="/livechat" component={Livechat} />
          <Route path="/products" component={Product} />
          <Route path="/signin" component={SignIn} />
          <Route path='/signup' component={SignUp} />
    </Layout>
    </Router>
  )
}

export default App
