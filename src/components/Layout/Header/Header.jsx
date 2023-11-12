import React, { useState } from 'react';
import { BiCartAlt, BiHeart, BiSearchAlt } from "react-icons/bi";
// import { SiExpertsexchange } from "react-icons/si";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from "./Header.module.css";
import Image from '../img/allsextoys.online logo.png'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';


function Header({onSearch}) {
    const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option
    const [searchTerm, setSearchTerm] = useState('');
    // const [toggleMenu, setToggleMenu] = useState(false);
    const [openNavText, setOpenNavText] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Call the onSearch function passed as a prop
  }
  
    return (
        <header className={styles.header} onSearch={setSearchTerm}>
            <div className={styles.topHeader}>
               

                <div className={styles.searchInputContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className={styles.searchButton} onSearch={setSearchTerm}>
                        <BiSearchAlt />
                    </button>
                </div>

                <div className={styles.shopBtns}>
                    <button className={styles.wishlist}>
                        <BiHeart />
                    </button>
                    <button className={styles.cart}>
                        <a href="/cart"><BiCartAlt /><span></span></a>
                    </button>
                </div>

            </div>

            {/* <div className={styles.bottomHeader}>

        <div className={styles.logo}>
                   <a href='/'> <img src={Image} alt='logo' style={{width: '100px', height: '90px'}}/></a>
                </div>
                <nav className={styles.navbar}>
                    <ul>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/categories">All Categories</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/livechat">Livechat</a></li>
                    </ul>
                </nav>
                <div className={styles.authNavbar}>
                    <ul>
                        <li><a href="/">Sign In</a></li>
                        <li><a href="/">Sign Up</a></li>
                    </ul>
                </div>
            </div> */}


    <div className={styles.barname}>
    <MDBNavbar expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
                   <a href='/'> <img src={Image} alt='logo' style={{width: '80px', height: '70px'}}/></a>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon='bars' fas className={openNavText ? styles.custombarsicon : ''}/>
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' style={{ color: 'blue', fontSize: 'bolder' }}>
                Shop
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/products' style={{ color: 'blue', fontSize: 'bolder' }}>Products</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/categories' style={{ color: 'blue', fontSize: 'bolder' }}>All Categories</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/livechat' style={{ color: 'blue', fontSize: 'bolder' }}>Livechat</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <div style={{padding: '10px', display: 'flex'}}>
          <div>
          <span className='navbar-text'> <a href="/signin" style={{ color: 'blue', fontSize: 'bolder', marginRight: '10px'}}>SignIn</a>
           </span>
          </div>
           <div>
           <span className='navbar-text'> <a href="/signup" style={{ color: 'blue', fontSize: 'bolder' }}>SignUp</a>
           </span>
           </div>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
       </header>
    );
}

export default Header;