import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer } from "./reducer";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     message: messageReducer,
//     middleware: (getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck: false,
// })
// });

const store = configureStore({
    reducer: {
            auth: authReducer,
            message: messageReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
export default store;
