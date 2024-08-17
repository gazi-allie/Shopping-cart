import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

import{remove}  from"../redux/Slices/CartSlice";

 export const CartItem =({item, itemIndex})=>{

const dispatch = useDispatch();
const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed successfully");
};
    return(
        <div>
       <div>
          <img src={item.image} alt={item.title} />
          
       </div>
       <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
       </div>
       <div>
        <p>{item.price}</p>
       </div>
       <div onClick={removeFromCart}>
       <AiOutlineDelete />

       </div>

        </div>
    )
};
export default CartItem