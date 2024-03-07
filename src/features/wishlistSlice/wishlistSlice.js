import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addtowishlist: (state, action) => {
            state.push(action.payload)
            toast.success("Product Successfully Added to Wishlist!", { autoClose : 1500});
        },
        removefromwishlist: (state, action) => {
            const { id } = action.payload;
            const Updated_Product = state.find((product) => product.id === id);
            if (Updated_Product) {
                toast.success("Product Successfully Removed to Wishlist!", { autoClose : 1500});
                return state.filter((product) => product.id !== id)
            }
        },
        togglewishlist: (state, action) => {
            const { id } = action.payload;
            const ProductExist = state.find(product => product.id === id)
            if (ProductExist) {
                return state.filter(product => product.id !== id);
            }
            else {
                state.push(action.payload);
            }
        }
    }
})

export const { addtowishlist, removefromwishlist, togglewishlist } = wishlistSlice.actions

export default wishlistSlice.reducer