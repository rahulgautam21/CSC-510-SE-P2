import React, { useState, useEffect } from 'react';
import '../styles.css';
import { API } from '../backend';
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base>
      <div className="row text-left">
        <p></p>
        <h4 className="text-white">Explore all the walpapers</h4>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} showQuantity={false} />
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col">
            <div>
              <h5>About Us</h5>
              <p>Wanna know more about the website?
                Please navigate to About Us page on the navigation bar</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Contact Us</h5>
              <p>Do you have any query and want to talk to an expert?
                Please navigate to Contact Us page.</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Sign up</h5>
              <p>First time visting the website?
                Please navigate to sign up page and resgister.</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Sign in</h5>
              <p>Already have an account?
                Please navigate to sign in page and log into your account.</p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  )
}