import { CART_COUNT } from "../master/Constant";


//this function will be used by our /reducers/counter.js file
export const increment = (num) => {
    const cartCount = localStorage.setItem(CART_COUNT,num);
    return {
        //we could name type key anything we want but we shouldnt
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const handleLoggin = (initialState) => {
    return{
        type: "SIGN_IN",
        payload: initialState
    }
}

export const Reactnativedatahshow = (initialState) => {
  return {
    //we could name type key anything we want but we shouldnt
    type: "DATASHOW",
    payload: initialState,
  };
};