import React, { useReducer } from 'react';

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'incre':
        return {...state, value: state.value + 1 };

      case 'decre':
        return {...state, value: Math.max(state.value - 1, 0) };

      case 'addname':
        return {...state, name: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 0, name: '' });

  const handleNameChange = (e) => {
    dispatch({ type: 'addname', payload: e.target.value });
  };
  const buttonHandle = (type ) => {
    dispatch({ type: `${type}` });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 disabled:opacity-50"
            disabled={state.value === 0}
            onClick={()=>buttonHandle('decre')}
          >
            -
          </button>
          <span className="text-xl font-bold">{state.value}</span>
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            onClick={()=>buttonHandle('incre')}
          >
            +
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <label htmlFor="username" className="text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="username"
            value={state.name}
            onChange={handleNameChange}
            className="border rounded-md p-2 w-full focus:outline-blue-500"
          />
          <div>Name: {state.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;