import { View, Image, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setUser } from "@/redux/auth_slice";
import { Images } from "@/constant/Images";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import OTPModal from "@/components/OTPModal"; // Import the reusable modal
import React from "react";
import PasswordField from "@/components/PasswordField";
import AlertMessage from "@/components/AlertMessage";

export default function ResetPassword() {
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
    router.replace("/login");
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
        <Text className="text-25 text-[#545454] font-bold mb-3">Reset Your Password</Text>

        {/* Email Input */}
        <InputField
          control={control}
          name="email"
          label="Email Address"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          rules={{ required: "Email is required" }}
        />

              <PasswordField
                  control={control}
                  name="password"
                  label="Password"
                  placeholder="********"
                  rules={{ required: "Password is required" }}
                />

            <PasswordField
                  control={control}
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="********"
                  rules={{ required: "Confirm Password is required" }}
                />

                <Text className="text-12 text-[#0a0303] pt-1">Password Hint: Your password must include at least 1 capital letter and 1 number</Text>

        {/* Proceed Button */}
        <TouchableOpacity onPress={handleSubmit(onSubmit)} className="bg-primary rounded-lg py-5 mt-5">
          <Text className="text-white text-center text-13 font-semibold">Reset Password</Text>
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
        <AlertMessage message="Email Verified successfully!" type="success" />
      </View>
    </SafeAreaView>
  );
}
