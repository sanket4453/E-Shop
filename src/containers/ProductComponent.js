import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

import { addTOCart } from '../redux/actions/productAction';

function ProductComponent() {
    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch()
    const addtocart = (id) =>{
        dispatch(addTOCart(id))
    }
  
    const renderList = products.map((product) =>{
        const {id, title, image,price,category} = product;
        return (
            <div className="four wide column" key={id}>
                {/* <Link to={`/product/${id}`}> */}
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}/>
                    </div>
                        <div className="content">
                            <div className="header">{title} </div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                            <div>
                                <button onClick={() =>addtocart(id)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
            </div>
            {/* </Link> */}
        </div>
        )
    })
    return (
        <>
      { renderList}
       </>
    )
}

export default ProductComponent
