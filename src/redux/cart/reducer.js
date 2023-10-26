import CartActionsType from "./action-type";

//ESTADO INICIAL
const initialState = {
    products: [],
    productsTotalPrice: 0
}

//CRIANDO UM REDUCER QUE DISPARA UMA AÇÃO DE ACORDO COM O ESTADO ATUAL QUE DEFINIMOS ACIMA
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionsType.ADD_PRODUCT:   //SE FOR === AO ACTION PRÉ DEFINIDO NO ARQUIVO "action-type.js"
          
        return {
            ...state,  
            products: [...state.products, action.payload]} //QUE VAI RETORNAR O STATUS EM POTENCIAL E A AÇÃO QUE SERÁ DISPARADA

        default:
            return state;
    }
}

export default cartReducer;