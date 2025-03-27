import { Images } from "@/constant/Images";
import { useRef, useState } from "react";
import { View, Modal, Text, TextInput, TouchableOpacity, Image } from "react-native";

interface OtpModalProps {
  isVisible: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  email: string;
}

export default function OTPModal({ isVisible, onClose, onVerify, email }: OtpModalProps) {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef<(TextInput | null)[]>([]);

  
  const handleOTPChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 3) {
        inputRefs.current[index + 1]?.focus(); // Move to the next input
      }
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to previous input on backspace
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-[#000000]/25">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg">
  
            <View className="flex justify-center items-center" >
                    <Image source={Images.OTPModalIcon}/>
            </View>

          {/*  Email */}
          <Text className="text-15 font-medium text-center mb-2">Please check your email.</Text>
          <Text className="text-12 text-[#667085] text-center mb-4 leading-[16.7px]">
          We've sent a code to <Text className="font-semibold">{email ?  email : "chidiahua@gmail.com"}</Text>
          </Text>

          {/* OTP Input */}
          <View className="flex-row justify-center gap-2 space-x-2">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`w-16 h-16 border border-primary rounded-md text-center text-lg font-bold text-primary bg-white ${
                    digit ? "shadow-lg  border-8 border-[#F7DFDE] shadow-[#F7DFDE]" : ""
                  }`}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(value) => handleOTPChange(index, value)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                autoFocus={index === 0} 
              />
            ))}
          </View>

          {/* Resend Code */}
          <View className="flex flex-row justify-center gap-3">
            <Text className="text-gray-600 text-sm mt-2">Didn't get a code?</Text>
            <TouchableOpacity>
               <Text className="text-primary text-center text-sm mt-2">Click to resend</Text>
            </TouchableOpacity>
          </View>
         

          {/* Buttons */}
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity
              className="flex justify-center items-center border border-gray-400 rounded-lg px-4 py-2 w-[45.8%]"
              onPress={onClose}
            >
              <Text className="text-gray-600">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center items-center bg-primary rounded-lg px-4 py-2 w-[45.8%]"
              onPress={() => onVerify(otp.join(""))}
            >
              <Text className="text-white">Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
