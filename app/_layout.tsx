import AuthProvider from "@/context/AuthProvider";
import { store } from "@/redux/Store";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import '@/global.css';

export default function Layout() {
  return (
    <Provider store={store}>
            <AuthProvider>
      <Slot />
    </AuthProvider>
    </Provider>
  );
}
