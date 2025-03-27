import { View, Image, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setUser } from "@/redux/auth_slice";
import { Images } from "@/constant/Images";
import { useForm } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import OTPModal from "@/components/OTPModal"; // Import the reusable modal
import React from "react";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [otpVisible, setOtpVisible] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: any) => {
    console.log("Sending OTP to:", data.email);
    setOtpVisible(true); // Show the OTP modal after email submission
  };

  const handleVerifyOtp = (otp: string) => {
    console.log("OTP entered:", otp);
    setOtpVisible(false); // Hide the modal

    const userData = { username: "chidiahua", email: "test@gmail.com" };
    dispatch(setUser(userData));

    // Redirect to reset_password after 2 minutes
    setTimeout(() => {
        router.replace("/reset_password");
    }, 2000); // 2 minutes
    };

  return (
    <SafeAreaView className="flex 1 bg-white">
      <View className="max-w-md p-5">
        {/* Logo */}
        <View className="items-start">
          <Image source={Images.Logo} className="w-24 h-10" resizeMode="contain" />
        </View>

        {/* Title */}
        <Text className="mt-8 text-[#2B2B2B] text-13 font-medium uppercase">Let's get you back on track</Text>
        <Text className="text-25 text-[#545454] font-bold">Reset Your Password</Text>
        <Text className="text-[#424242] text-13 font-medium my-5">Enter your email, and we will send a 4-digit OTP to verify your identity.</Text>

        {/* Email Input */}
        <InputField
          control={control}
          name="email"
          label="Email Address"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          rules={{ required: "Email is required" }}
        />

        {/* Proceed Button */}
        <TouchableOpacity onPress={handleSubmit(onSubmit)} className="bg-primary rounded-lg py-5 mt-5">
          <Text className="text-white text-center text-13 font-semibold">Proceed</Text>
        </TouchableOpacity>

         {/* Register Link */}
                 <View className="flex-row justify-center gap-1 mt-3">
                  <Text className="text-gray-600">Remember your password?  </Text>
                  <TouchableOpacity onPress={() => router.replace("/login")}>
                    <Text className="text-primary font-semibold">LOGIN HERE</Text>
                  </TouchableOpacity>
                </View>

        {/* OTP Modal */}
        <OTPModal email="" isVisible={otpVisible} onClose={() => setOtpVisible(false)} onVerify={handleVerifyOtp} />
      </View>
    </SafeAreaView>
  );
}
