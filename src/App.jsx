import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import HomeScreen from './screens/homeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import CategoryList from './components/Categories/CategoryList'
import Form from './components/Form/File';
import CartFile from './components/Cart/CartFile'
import Livechat from './components/LiveChat/livechat'
import Product from './components/Products/products'
import SignIn from './components/SignIn/signin'
import SignUp from './components/SignUp/signup'
import ForgotPassword from './components/Forgot-password/forgot-password'





function App() {
  
  return (
    <Router>
      
      <Layout >
      <Route path="/" exact><HomeScreen /></Route>
          <Route path="/categories" component={CategoryList} />
          <Route path="/admin" component={Form} />
          <Route path="/cart" component={CartFile} />
          <Route path="/livechat" component={Livechat} />
          <Route path="/products" component={Product} />
          <Route path="/signin" component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgot-password' component={ForgotPassword} />
    </Layout>
    
    </Router>
  )
}

export default App
