import { View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "@/constant/Images";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen() {

    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => {
        router.replace("/onboarding"); 
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [router]);
    

  return (
    <ImageBackground source={Images.Splash3} className="flex-1 justify-center">
      <SafeAreaView className="flex-1 items-center justify-center">
        <View className="w-full items-center gap-8 max-w-md mx-auto">
          <Image
            source={Images.Logo}
            style={{
                height: 100,
                aspectRatio: 1,
                width: 300
              }}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
