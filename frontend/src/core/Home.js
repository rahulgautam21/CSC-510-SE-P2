import React, { useState, useEffect } from 'react';
import '../styles.css';
import { API } from '../backend';
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';
import {Link, withRouter} from 'react-router-dom';

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
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return {color: 'red'};
    } else {
      return {color: '#FFFFFF'};
    }
  };
  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base>
      <div className="row text-left">
        <p className="bg_image"></p>
        <h4 className="text-white text-left">Explore all the wallpapers</h4>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} showQuantity={false} />
              </div>
            );
          })}
        </div>
      </div>
      

  <div className="container_card">
    <div className="row">
        <div className="col">
        <div className="card">       
                <div className="card-body">
                  <h5 className="card-title">About Us</h5>
                  <p className="card-text">Wanna know more about the website?
                  Please navigate to About Us page on the navigation bar</p>
                </div>
              </div>
        </div>
        <div className="col">
        <div className="card">     
                <div className="card-body">
                  <h5 className="card-title">Contact Us</h5>
                  <p className="card-text">Do you have any query and want to talk to an expert?
                  Please navigate to Contact Us page.</p>
                </div>
              </div>
        </div>
        <div className="col">
        <div className="card">        
                <div className="card-body">
                  <h5 className="card-title">Sign up</h5>
                  <p className="card-text">First time visting the website?
                  Please navigate to sign up page and resgister.</p>
                </div>
              </div>
        </div>
        <div className="col">
        <div className="card">        
                <div className="card-body">
                  <h5 className="card-title">Sign in</h5>
                  <p className="card-text">Already have an account?
                  Please navigate to sign in page and log into your account.</p>
                </div>
              </div>
        </div>
    </div>
</div>
<div className="row text-left">
        <p className="bg_image"></p>
        <h4 className="text-white text-right">Happy Shopping!!</h4>
      </div>
    </Base>
  );
}
