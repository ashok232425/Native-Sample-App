/* eslint-disable prettier/prettier */
export const initialState = {
    count : 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment' :
            return {count: state.count + 1};
        case 'decrement' :
            return {count: state.count - 1};
        case 'reset' :
            return initialState;
        default:
            throw new Error('Unhandled action type');
    }
};
