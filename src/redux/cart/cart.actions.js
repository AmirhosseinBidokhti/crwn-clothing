import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item //payload could be any type of data. in our case item object that we want to add.
});