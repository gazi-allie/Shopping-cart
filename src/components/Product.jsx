import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import{add,remove}  from"../redux/Slices/CartSlice";

const Product = ({ post }) => {

    const {cart} = useSelector((state)=> state);
const dispatch = useDispatch();

const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart ")
};
const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
};
    return (
        <div className=''>
            <div>
                <p> {post.title}</p>
            </div>
            <div>
                <p className=''> {post.description.split(" ").slice(0,10).join(" ") + ' ...'}</p>
            </div>
            <div>
                <img src={post.image}  />

            </div>
            <div>
                <p> {post.price}</p>
            </div>
            <div>
               {
                cart.find(item=> item.id === post.id)?
                (<button onClick={()=> removeFromCart(post)}> Remove Item</button>):
                <button onClick={()=> addToCart(post)}>Add to Cart</button>
 
               }
            </div>




        </div>
    )
};
export default Product;

