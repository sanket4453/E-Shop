import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import CartItem from './CartItem'

function ProductCart() {
    const cart = useSelector(state => state.shop.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    useEffect(() => {
        
        let items =0;
        let price=0;

        cart.forEach((item)=>{
            items +=item.qty;
            price+= item.qty * item.price;
        })
        setTotalPrice(price)
        setTotalItems(items)
      
    }, [cart,totalPrice,totalItems,setTotalItems,setTotalPrice])
   // console.log("Basket",basket);
    const {id, image, title, price, category, description} = cart
    return (
        <div >
          <div>
             {cart.map((item)=>(
                 <CartItem key={item.id} itemData={item}/>
             ))}
          </div>
          <div>
              <h4>Cart Summary</h4>
              <div>
                  <span>Total : ({totalItems} items)</span>
                  <span>$ {totalPrice}</span>
              </div>
              <button>

                  Proceed To Checkout
              </button>
          </div>
        </div>
    )
}

export default ProductCart
