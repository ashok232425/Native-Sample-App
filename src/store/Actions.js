/* eslint-disable prettier/prettier */
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     };
// };
export const BUY_CAKE = 'BUY_CAKE';
export const BUY_ICECREAM = 'BUY_ICECREAM';

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
};

export const buyIcecream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    };
};