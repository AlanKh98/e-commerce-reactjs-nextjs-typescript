import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
import data from '../data.json'
import { openModal } from './modal';

const url = 'https://course-api.com/react-useReducer-cart-project';
interface item{
  id:string,
  title:string,
  description:string|undefined,
  type?:string|undefined,
  src:string,
  alt:string,
  price:number,
  amount:number
}
interface itemState{
    cartItems: item[],
    favItems: item[],
    amount: number,
    total: number,
    isLoading: boolean,
}
type CartAction = {
  payload: string,
}
const initialState :itemState = {
  cartItems: [],
  favItems:[],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name:string, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state:itemState) => {
      state.cartItems = [];
    },
    removeItem: (state:itemState, action:CartAction) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem: (state:itemState, {payload}) => {
      const cartItem = data.find((item) => item.id === payload);
      if(cartItem){
        
        state.cartItems.push({...cartItem,amount:1});
        state.amount=state.amount+1;
        state.total = state.total+ cartItem.price;
      }
      console.log(current(state));
    },
    addFavItem: (state:itemState, {payload}) => {
      console.log("Add");
      const cartItem = data.find((item) => item.id === payload);
      if(cartItem){
        state.favItems.push({...cartItem,amount:0});
      }
      console.log(current(state));
    },
    removeFavItem: (state:itemState, action:CartAction) => {
      console.log("remove");
      const itemId = action.payload;
      state.favItems = state.favItems.filter((item) => item.id !== itemId);
      console.log(current(state));
    },
    increase: (state:itemState, { payload }) => {
      console.log('inc');
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem!=undefined?
      cartItem.amount = cartItem.amount + 1:[];
      console.log(current(state));
    },
    decrease: (state:itemState, { payload }) => {
      console.log('inc');
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if(cartItem != undefined){
        cartItem.amount = cartItem.amount - 1;
        if(cartItem.amount == 0)state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      }
    },
    calculateTotals: (state:itemState) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem ,addItem,addFavItem,removeFavItem,increase, decrease, calculateTotals } =
cartSlice.actions;
export default cartSlice.reducer;
