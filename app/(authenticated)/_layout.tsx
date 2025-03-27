import AuthProvider from "@/context/AuthProvider";
import { store } from "@/redux/Store";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { Image, Platform } from "react-native";
import "@/global.css";
import { Images } from "@/constant/Images";

export default function Layout() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Tabs
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#C99213",
            tabBarInactiveTintColor: "#8E8E93",
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "500",
              fontFamily: "medium",
              height: 40,
            },
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "white",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderBottomColor: "white",
              shadowColor: "white",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0,
              elevation: 0,           
              height: 55,
              paddingTop: 0,
            },
            tabBarItemStyle: {
                backgroundColor: "white",
                borderColor: "white",
                shadowColor: "none",
                borderRadius: 0,
                margin: 0,
              },
          })}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Dashboard",
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={Images.HomeIcon}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? "white" : color,
                    backgroundColor: focused ? "#C99213" : "white",
                    borderWidth: 2,
                    borderColor: focused ? "black" : "#8E8E93",
                    borderRadius: 5,
                    padding: 5,
                  }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="history"
            options={{
              title: "History",
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={Images.HistoryIcon}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? "white" : color,
                    backgroundColor: focused ? "#C99213" : "white",
                    borderWidth: 2,
                    borderColor: focused ? "black" : "#8E8E93",
                    borderRadius: 5,
                    padding: 5,
                  }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="rewards"
            options={{
              title: "Rewards",
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={Images.RewardsIcon}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? "white" : color,
                    backgroundColor: focused ? "#C99213" : "white",
                    borderWidth: 2,
                    borderColor: focused ? "black" : "#8E8E93",
                    borderRadius: 5,
                    padding: 5,
                  }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="currencies"
            options={{
              title: "Currencies",
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={Images.CurrenciesIcon}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? "white" : color,
                    backgroundColor: focused ? "#C99213" : "white",
                    borderWidth: 2,
                    borderColor: focused ? "black" : "#8E8E93",
                    borderRadius: 5,
                    padding: 5,
                  }}
                />
              ),
            }}
          />
        </Tabs>
      </AuthProvider>
    </Provider>
  );
}
