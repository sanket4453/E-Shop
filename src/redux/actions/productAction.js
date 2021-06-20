import { ActionTypes } from '../constants/action-types';

export const setProduct = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}
export const addTOCart = (itemID) =>{
   // console.log("ADD to cart from action",product);
    return{        
        type:ActionTypes.ADD_TO_CART,
        payload:{
            id:itemID,
        },
    }
}
// export const removeselectedProduct = (itemID) =>{
//     return{
//         type:ActionTypes.REMOVE_SELECTED_PRODUCT,
//        payload:{
//            id:itemID,
//        }
//     }
// }

export const adujstQty = (itemID, value) =>{
    return{
        type:ActionTypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value,
        }
    }
}