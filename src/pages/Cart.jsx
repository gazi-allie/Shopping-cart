import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartItem } from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    settotalAmount(total);
  });
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div>
            <div>
              <div> Your Cart Item </div>
              <div> Summary </div>
              <p>
                <span> Total items : {cart.length}</span>
              </p>
            </div>
            <div>
              <p> Total Amount: ${totalAmount}</p>
              <button> CheckOut</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Your Cart is Empty</h2>
          <div>
            <Link to={'/'}>
              <button> Shop Now </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
