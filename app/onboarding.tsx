import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "@/constant/Images";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const onboardingData = [
  {
    title: "Transfer with Ease",
    subtitle: "Your Gateway to Global Funds",
    image: Images.Splash4,
  },
  {
    title: "The Smart Choice for Fast and Secure Remittances",
    subtitle: "Your Money, Your Control",
    image: Images.Splash5,
  },
  {
    title: "One account, all of Azany",
    subtitle: "Seamless Transactions Await",
    image: Images.Splash6,
  },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const isLastStep = step === onboardingData.length - 1;

  const onNext = () => {
    if (step < onboardingData.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Navigate to the next screen");
    }
  };

  return (
    <ImageBackground source={onboardingData[step].image} className="flex-1">
      <SafeAreaView className="flex-1 items-center justify-center">
        <View className="flex-1 justify-end pb-12 w-full items-center gap-8 max-w-md mx-auto">
          <View className="flex justify-center items-center">
            <Text className="text-25 text-white font-semibold px-5 text-center">
              {onboardingData[step].title}
            </Text>
            <Text className="text-[#FDEEEE] text-24 italic">
              {onboardingData[step].subtitle}
            </Text>

            <View className="flex-row mt-4">
                {onboardingData.map((_, index) => (
                  <View key={index} className={`h-2 mx-1 rounded-full ${step === index ? "bg-white w-10" : "bg-gray-400 w-2"}`} />
                ))}
              </View>
          </View>
          <View className="w-full px-8">
            <Pressable
              className={`w-full mx-auto flex-row items-center justify-center border rounded-lg py-4 gap-2 ${isLastStep ? 'border-white bg-white' : 'border-white bg-transparent'}`}
              onPress={onNext}
            >
              <Text className={`text-16 ${isLastStep ? "text-black" : "text-white"} font-medium`}>{isLastStep ? "Sign with Email" : "Continue"}</Text>
              {isLastStep ? null : <AntDesign name="arrowright" size={20} color="white" />}
            </Pressable>
          </View>
          {isLastStep && (
              <View className="flex-row w-full items-center justify-center gap-2 -mt-4">
                <Pressable className="flex-row w-[40.5%] items-center gap-2 border border-white rounded-lg py-4 px-5">
                  <FontAwesome name="google" size={20} color="white" className="ml-5" />
                  <Text className="text-white font-medium">Google</Text>
                </Pressable>

                <Pressable className="flex-row w-[40.5%] items-center gap-2 border border-white rounded-lg py-4 px-5">
                  <FontAwesome name="apple" size={20} color="white" className="ml-5" />
                  <Text className="text-white font-medium">Apple</Text>
                </Pressable>
              </View>
            )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
