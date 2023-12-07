import { CommonHeader, Index } from "../../components";
import { Link } from "react-router-dom";
import { OrderItemType, OrderType } from "../../types/type";
import { useState } from "react";

import img from "../../assets/productImage/product2.jpg";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "t1",
    quantity: 4,
    price: 2000,
  },
];

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction_product_card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Tushar Upadhyay",
    address: "",
    city: "Hathras",
    state: "Uttar Pradhesh",
    country: "India",
    pinCode: 204101,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "t1",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin_container">
      <Index />
      <main className="product_management">
        <section
          style={{
            padding: "2rem",
          }}
        >
          <CommonHeader title="Order Items" />

          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="shipping_info_card">
          <h1>Order Info</h1>

          <h5>User Info</h5>

          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

export default TransactionManagement;
