import React,{useState} from 'react'
import { adujstQty } from '../redux/actions/productAction';
import { useDispatch } from 'react-redux';

function CartItem({itemData}) {
    const [input, setInput] = useState(itemData.qty)

    const dispatch = useDispatch()

    const onChangeHandler = (e) =>{
        setInput(e.target.value);
        dispatch(adujstQty(itemData.id, e.target.value))
    }
    return (
        <div style={{marginTop:"50px"}}>
            <img src={itemData.image} alt="" />

            <div>
                <p>{itemData.title} </p>
                <p>{itemData.description} </p>
                <p>{itemData.price}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="">Qty</label>
                    <input type="number" name="" id="" value={input}  onChange={onChangeHandler}/>
                </div>
               
            </div>
        </div>
    )
}

export default CartItem
