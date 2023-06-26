import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decreaseByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [additionalAmount, setAdditionalAmount] = useState(0);

  const additionalValue = Number(additionalAmount) || 0;
  // const minusValue = Number(additionalAmount) || 0;

  const resetAll = () => {
    setAdditionalAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={additionalAmount}
        onChange={(e) => setAdditionalAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(additionalValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decreaseByAmount(additionalValue))}>
          Subtract Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};
export default Counter;
