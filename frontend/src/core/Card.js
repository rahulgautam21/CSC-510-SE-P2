import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import {
  addItemToCart,
  findItemInCart,
  removeItemFromCart,
} from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  showStock = true,
  showQuantity = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const cartProduct = findItemInCart(product["_id"]);
  const cartProductQuantity = cartProduct ? cartProduct.quantity ?? 0 : 0;

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const quantity = product.quantity;
  const stock = product.stock - cartProductQuantity;

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-danger mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-danger font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p className="btn btn-danger rounded  btn-sm px-4">
          Price: ${cartPrice}
        </p>
        <span> </span>
        {showQuantity && quantity >= 0 ? (
          <p className="btn btn-danger rounded  btn-sm px-4">
            Quantity: {quantity}
          </p>
        ) : (
          <></>
        )}
        {showStock && stock >= 0 ? (
          <p className="btn btn-danger rounded  btn-sm px-4">Stock: {stock}</p>
        ) : (
          <></>
        )}
        <div className="row">
          {stock > 0 ? (
            <div className="col-12">{showAddToCart(addtoCart)}</div>
          ) : (
            <></>
          )}
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
