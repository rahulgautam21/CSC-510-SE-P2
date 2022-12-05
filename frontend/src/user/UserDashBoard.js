import { isAuthenticated } from "auth/helper";
import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { getUser } from "./helper/userapicalls";

// This is used to display user dashboard
const UserDashBoard = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getUser(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data.purchases);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title="UserDashBoard page">
      <h1>Your Purchases: </h1>
      <table>
        <tr className="tr">
          <th className="th">Index</th>
          <th className="th">Name</th>
          <th className="th">Description</th>
          <th className="th">Quantity</th>
          <th className="th">Cost of Purchase</th>
        </tr>
        {orders.map((order, index) => {
          return (
            <tr>
              <th>{index}.</th>
              <th>{order.name}</th>
              <th>{order.description}</th>
              <th>{order.quantity}</th>
              <th>${order.amount}</th>
            </tr>
          );
        })}
      </table>
    </Base>
  );
};

export default UserDashBoard;
