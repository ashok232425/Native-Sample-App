/* eslint-disable prettier/prettier */
import { useState } from "react";

function useCustomHook(initialValue, step) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    return {count, increment, decrement};
};

export default useCustomHook;