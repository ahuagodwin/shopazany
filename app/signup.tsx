import { View, Image, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setUser } from "@/redux/auth_slice";
import { Images } from "@/constant/Images";
import { useForm } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import Checkbox from "@/components/CheckBox";

export default function SignUpScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    const userData = { username: "chidiahua", email: "test@gmail.com" };
    dispatch(setUser(userData));
    router.replace("/home");
  };

  return (
    <SafeAreaView className="flex 1 bg-white">
      <View className="max-w-md p-5">
        {/* Logo */}
        <View className="items-start">
          <Image source={Images.Logo} className="w-24 h-10" resizeMode="contain" />
        </View>

        {/* Title */}
        <Text className="text-24 text-black font-bold mt-5 mb-5">Create your Account</Text>
        <Text className="text-[#2B2B2B] text-13 font-medium">Unlock your passage to seamless multi-currency finances today.</Text>

        {/* Email Input */}
        <InputField
          control={control}
          name="firstName"
          label="First Name"
          placeholder="chidi"
          keyboardType="default"
          rules={{ required: "first name is required" }}
        />
         <InputField
          control={control}
          name="lastName"
          label="Last Name"
          placeholder="ahua"
          keyboardType="default"
          rules={{ required: "last name is required" }}
        />
        <InputField
          control={control}
          name="email"
          label="Email Address"
          placeholder="godwincahua@gmail.com"
          keyboardType="email-address"
          rules={{ required: "Email is required" }}
        />

        {/* Password Input */}
        <PasswordField
          control={control}
          name="password"
          label="Password"
          placeholder="********"
          rules={{ required: "Password is required" }}
        />

        {/* Remember Me & Forgot Password */}
        <View className="flex-row justify-between items-center mt-3">
          <Checkbox label="I agree to the terms and condition" onChange={(isChecked) => console.log("terms:", isChecked)} />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary rounded-lg py-5 mt-5"
        >
          <Text className="text-white text-center text-13 font-semibold">Create Account</Text>
        </TouchableOpacity>

        {/* OR Separator */}
        <View className="flex-row items-center my-2">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-black">Or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex-row justify-center gap-3 space-x-4 px-2">
          <TouchableOpacity className="flex-row w-[50%] justify-center items-center border border-gray-300 rounded-lg p-4">
            <FontAwesome name="google" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row w-[50%] justify-center items-center border border-gray-300 rounded-lg p-4">
            <FontAwesome name="apple" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <View className="flex-row justify-center gap-1 mt-3">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text className="text-primary font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
