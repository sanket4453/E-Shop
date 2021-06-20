import { combineReducers } from 'redux';

import shopReducer from './productReducer';

export const reducers = combineReducers({
   shop:shopReducer
   // allProducts: productReducer,
   // product: selectedProductReducer,
   // addTOCart:addTOCartReducer
})