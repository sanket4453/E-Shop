import {ActionTypes}  from '../constants/action-types';

const inititalState = {
    products:[],
    cart:[],
    currentItem:null,
}
// const addtocartIntialState ={
//     basket:[]
// }
const shopReducer = (state = inititalState, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            //Get the items data from the products array
            const item = state.products.find((prod) => prod.id === action.payload.id);
            //check if Item is in cart already
            const inCart = state.cart.find((item)=>
            item.id === action.payload.id ? true : false
            )
            return {
                ...state,
                cart : inCart
                    ? state.cart.map((item ) =>
                    item.id === action.payload.id? { ...item, qty: item.qty + 1}
                    : item
                    )
                    : [...state.cart, { ...item, qty: 1}],

            };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                cart : state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart : state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            };
        case ActionTypes.SET_PRODUCTS:
            return{
                ...state,
               products:action.payload
            }
        case ActionTypes.SELECTED_PRODUCT:
            return{
                  ...state,
                currentItem:action.payload
              }
        default : 
        return state
            
            break;
    
        // default:
        //     break;
    }
}
export default shopReducer;

// export const addTOCartReducer = (state=inititalState.basket, {type,payload}) =>{
//     console.log("ADDto cart from reducer",payload);
//     switch (type) {
//           case ActionTypes.ADD_TO_CART:
//             return{
//                 ...state,
//                 basket:[...state.basket,payload]
//             }
           
    
//         default:
//             return state;
//             break;
//     }
// }

// export const productReducer = (state=inititalState, {type,payload}) =>{
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return {
//                 ...state,
//                 products:payload
//             };
        
            
    
//         default:
//             return state;
//            // break;
//     }
// }

// export const selectedProductReducer = (state={}, {type, payload})=>{
//     switch (type) {
//         case ActionTypes.SELECTED_PRODUCT:
//             return{
//                 ...state,
//                 ...payload
//             }
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return{
               
//             }
        
    
//         default:
//             return state
//           //  break;
//     }
// }