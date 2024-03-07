import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const addtoartSlice = createSlice({
    name : 'addtocart',
    initialState,
    reducers: {
        addproducttocart : (state, action) => {
            state.push(action.payload)
            toast.success("Product Successfully Added to AddtoCart!", { autoClose : 1500});
        },
        deleteproductfromcart: (state, action) => {
            const {id} = action.payload;
            const DeleteProduct = state.find((product)=> product.id === id)
            if(DeleteProduct){
              toast.success("Product Successfully Removed From AddtoCart!", { autoClose : 1500});
              return  state.filter((remainproduct) => remainproduct.id !== id)
            }
            
        },
        updatequantity: (state, action) => {
         const {id} = action.payload;
         const Updated_Product = state.find((product)=> product.id === id)
         if(Updated_Product){
            Updated_Product.quantity += 1;
         }
        },
        reducequanitity: (state, action) => {
          const {id} = action.payload;
          const Updated_Product = state.find((product) => product.id === id);
          if(Updated_Product){
           Updated_Product.quantity > 1 ? Updated_Product.quantity -= 1 : Updated_Product.quantity = 1;
          }
        },
    }
})

export const {addproducttocart, deleteproductfromcart, updatequantity, reducequanitity} = addtoartSlice.actions

export default addtoartSlice.reducer