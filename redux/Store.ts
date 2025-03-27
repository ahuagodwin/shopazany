import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth_slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";



const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
  blacklist: ["register"], // Exclude non-serializable values
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore Redux Persist actions
        ignoredPaths: ["auth.register"], // Ignore non-serializable paths
      },
    }),
});

export const persistor = persistStore(store);


// Defining the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed versions of `useDispatch` and `useSelector` hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

