import { View, Text, Button, Image, Pressable, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setUser } from "@/redux/auth_slice";
import { Ionicons } from '@expo/vector-icons';
import { Images } from "@/constant/Images";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    const userData = { username: "user", email: "test@gmail.com" };
    dispatch(setUser(userData));
    router.replace("/home");
  };

  return (

<ImageBackground
      source={Images.Splash3} 
      style={{ flex: 1, justifyContent: "center" }} 
    >
      <View className="w-full items-center gap-8 max-w-md mx-auto">
        <Image
          source={Images.Logo}
          style={{
            height: 87,
            aspectRatio: 1,
            width: 207
          }}
          resizeMode="contain"
        />
       
      </View>
    </ImageBackground>
  );
}
