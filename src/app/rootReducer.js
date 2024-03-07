import { combineReducers } from 'redux';
import addtocartReducer from './../features/addtocartSlice/addtocartSlice';
import wishlistReducer from './../features/wishlistSlice/wishlistSlice';

const rootReducer = combineReducers({
  addtocart: addtocartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
