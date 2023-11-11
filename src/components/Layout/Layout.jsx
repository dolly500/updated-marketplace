import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout(props) {
  return (
    <>
      <div>
      <Header />

      <div style={{padding: "20px 70px"}}>
        {props.children}
      </div>

      <Footer />
    
      
    </div>

    
    
    </>
  );
}

export default Layout;