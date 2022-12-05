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
    </Base>
  );
}
