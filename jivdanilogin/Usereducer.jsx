import React, { useReducer } from 'react';

export const Usereducer = () => {
  // 1. Initial state
  const initialState = {
    name: '',
    password: '',
    email: '',
    city: '',
    address: ''
  };

  // 2. Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value, // dynamically update field
        };
      case 'RESET':
        return initialState; // reset form
      default:
        return state;
    }
  };

  // 3. useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state);
  };
  

  return (
    <div>
      <h2>useReducer Hook Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })
          }
        />
        <br></br>

        <input
          name="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_FIELD', field: 'password', value: e.target.value })
          }
        />
<br></br>
        <input
          name="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })
          }
        />
<br></br>
        <input
          name="city"
          placeholder="Enter city"
          value={state.city}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_FIELD', field: 'city', value: e.target.value })
          }
        />
<br></br>
        <input
          name="address"
          placeholder="Enter address"
          value={state.address}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_FIELD', field: 'address', value: e.target.value })
          }
        />

        <br />
        <button type="submit" onClick={()=>console.log(state)}>Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </button>
      </form>

      <ul>
        <li>Name:{state.name}</li>
                <li>Password:{state.password}</li>

        <li>Email:{state.email}</li>
                <li>City:{state.city}</li>


      </ul>

    </div>
  );
};
