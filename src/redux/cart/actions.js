import CartActionsType from "./action-type"

//DEFININDO A ACTION
export const addProductToCard = (payload) => ({
      type: CartActionsType.ADD_PRODUCT,
      payload,  
})