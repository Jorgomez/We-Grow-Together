export const initialState = {}

export function errorReducer(state, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        [action.payload.field]: action.payload.message
      }
    case 'CLEAR_ERROR':
      const { [action.payload.field]: _, ...newState } = state
      return newState
    case 'CLEAR_ALL_ERRORS':
      return {}
    default:
      return state
  }
}

// reducers/loginErrorReducer.js
// export const loginInitialState = {};

// export function loginErrorReducer(state, action) {
//   switch (action.type) {
//     case 'SET_ERROR':
//       return {
//         ...state,
//         [action.payload.field]: action.payload.message
//       };
//     case 'CLEAR_ERROR':
//       const { [action.payload.field]: _, ...newState } = state;
//       return newState;
//     case 'CLEAR_ALL_ERRORS':
//       return {};
//     default:
//       return state;
//   }
// }

// // reducers/registerErrorReducer.js
// export const registerInitialState = {};

// export function registerErrorReducer(state, action) {
//   switch (action.type) {
//     case 'SET_ERROR':
//       return {
//         ...state,
//         [action.payload.field]: action.payload.message
//       };
//     case 'CLEAR_ERROR':
//       const { [action.payload.field]: _, ...newState } = state;
//       return newState;
//     case 'CLEAR_ALL_ERRORS':
//       return {};
//     default:
//       return state;
//   }
// }
