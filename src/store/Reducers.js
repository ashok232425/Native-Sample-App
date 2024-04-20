/* eslint-disable prettier/prettier */
// const counterReducers = (state = {count:10}, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//         return {count: state.count + 1};
//         case 'DECREMENT':
//             return {count: state.count - 1};
//         default:
//             return state;
//     }
// }

import { BUY_CAKE, BUY_ICECREAM } from './Actions';
const initialCountOfCakes = {
    cakes : 10,
};

const initialCountOfIcecreams = {
    icecreams : 20,
};

const cakeReducer = (state = initialCountOfCakes, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {...state, cakes: state.cakes - 1};
        default:
            return state;
    }
};

const icecreamReducer = (state = initialCountOfIcecreams, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                icecreams: state.icecreams - 1,
            };
        default:
            return state;
    }
};

export { cakeReducer, icecreamReducer };
