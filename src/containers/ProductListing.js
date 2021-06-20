import React,{useEffect} from 'react'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { selectedProduct, setProduct } from '../redux/actions/productAction';

function ProductListing() {

    const products = useSelector((state) =>state)
    const dispatch = useDispatch()

    const fetchProducts = async () =>{
        try{
            const responce = await axios.get("https://fakestoreapi.com/products")
            console.log(responce.data);
            dispatch(setProduct(responce.data))

        }catch(err){
            console.log(err);
        }

    }

    useEffect(() =>{
        fetchProducts();
    },[])
    console.log("Products",products);


    return (
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )
}

export default ProductListing
