const InitialValues = {
    cartCounter: 0,
};

export default function CartReducer(state = InitialValues, action) {
    switch (action.type) {
        case 'Increament':
            return {
                ...state, cartCounter: state.cartCounter + 1  
            };
        case 'IncreamentWith5':
            return {
                ...state, cartCounter: state.cartCounter + action.payloads
            }
        default:
            return state
    }
}