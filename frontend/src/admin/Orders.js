import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { getAllOrders } from 'core/helper/orderHelper';
import '../styles.css';

// Delete product from the application
const AllOrdersPage = () => {
    const [allOrders, setAllOrders] = useState([]);

    const { user, token } = isAuthenticated();

    const preload = () => {
        getAllOrders(user._id, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllOrders(data);
            }
        });
    };

    useEffect(() => {
        preload();
    }, []);



    return (
        <Base title="Welcome admin" description="Manage all Orders here">
            <h2 className="mb-4">All Orders:</h2>
            <table>
                <tr className="tr">
                    <th className="th">Index</th>
                    <th className="th">User Name</th>
                    <th className="th">Number of Products</th>
                    <th className="th">Cost of Purchase</th>
                    <th className="th">Status</th>
                </tr>
                {allOrders.map((order, index) => {
                    return <tr>
                        <th>{index}.</th>
                        <th>{order.user.name}</th>
                        <th>{order.products.length}</th>
                        <th>{order.amount}</th>
                        <th>{order.status}</th>
                    </tr>
                })
                }
            </table>
        </Base>
    );
};

export default AllOrdersPage;
