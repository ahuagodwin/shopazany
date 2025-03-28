import { Images } from "@/constant/Images";
import { useRef, useState } from "react";
import { View, Modal, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface OtpModalProps {
  isVisible: boolean;
  onClose: () => void;
  onVerify: () => void;
}

export default function LogOutModal({ isVisible, onClose, onVerify }: OtpModalProps) {

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-[#000000]/25">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg">
  
            <View className="flex justify-center items-center" >
            <AntDesign name="logout" size={54} color="red" />
            </View>


          {/* Resend Code */}
          <View className="flex flex-row justify-center gap-3">
            <Text className="text-gray-600 text-sm mt-2">Are you sure you want to logout?</Text>
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
              className="flex justify-center items-center bg-red-500 rounded-lg px-4 py-2 w-[45.8%]"
              onPress={onVerify}
            >
              <Text className=" text-white">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
