import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import studentReducers from "./studentReducers";

// redux core
const reducer = combineReducers({
  data: studentReducers,
});
const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }
const store = createStore(reducer, composeEnhancer);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// redux toolkit
// const store = configureStore({
//   reducer: {
//     data: studentSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: studentServices,
//       },
//     }),
// });

export default store;
