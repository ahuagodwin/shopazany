import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ResetPasswordScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Reset Password Screen</Text>
      <Button title="Back to Login" onPress={() => router.replace("/login")} />
    </View>
  );
}
