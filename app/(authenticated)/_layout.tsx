import AuthProvider from "@/context/AuthProvider";
import { store } from "@/redux/Store";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import "@/global.css";

export default function Layout() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Tabs
          screenOptions={{
            tabBarStyle: { backgroundColor: "white", borderTopWidth: 1 },
            tabBarActiveTintColor: "gold",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Dashboard",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="grid-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="history"
            options={{
              title: "History",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="time-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="rewards"
            options={{
              title: "Rewards",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="gift-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="currencies"
            options={{
              title: "Currencies",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cash-outline" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </AuthProvider>
    </Provider>
  );
}
