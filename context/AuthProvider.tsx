import React, { useEffect } from "react";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store, useAppDispatch } from "@/redux/Store";
import { setLoading, setUser } from "@/redux/auth_slice";



const AuthProvider = ({ children }: { children: any}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      }
      dispatch(setLoading(false)); // Stop loading after checking
    };
    loadUser();
  }, [dispatch]);

  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
