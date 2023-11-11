import React from 'react';
import { FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <FaShippingFast />
            </div>
            <div className={styles.detail}>
              <h3>Free Delivery</h3>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <FaHeadphonesAlt />
            </div>
            <div className={styles.detail}>
              <h3>24X7 Support</h3>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <FaWallet />
            </div>
            <div className={styles.detail}>
              <h3>Money Back</h3>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.bottom}>
            <div className={styles.box}>
              <h3>Your Account</h3>
              <ul>
                <li>About us</li>
                <li>Account</li>
                <li>Payment</li>
                <li>Sales</li>
              </ul>
            </div>
            <div className={styles.box}>
              <h3>Products</h3>
              <ul>
                <li>Delivery</li>
                <li>Track Order</li>
                <li>New Product</li>
                <li>Old Product</li>
              </ul>
            </div>
            <div className={styles.box}>
              <h3>Contact Us</h3>
              <ul>
                <li>4005, Silver Business Point India</li>
                <li>+(012)99999999</li>
                <li>info@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
