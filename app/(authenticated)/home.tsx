import { View, Text, Button, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import ProtectedRoute from "@/components/ProtectedRoute";
import { logout } from "@/redux/auth_slice";



export default function HomeScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <ProtectedRoute>
      <SafeAreaView>
      <View>
        <Text>Welcome to Home Screen!</Text>
        <Button title="Logout" onPress={() => { dispatch(logout
            ()); router.replace("/login"); }} />
      </View>
      </SafeAreaView>
    </ProtectedRoute>
  );
}
