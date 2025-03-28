import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Images } from "@/constant/Images";
import { FontAwesome } from "@expo/vector-icons";

export default function Card() {
  return (
    <View className="bg-[rgba(201,146,19,0.16)] p-4 rounded-lg ">
      <View className="flex flex-row justify-between items-center">
        <Text className="flex justify-center items-center text-sm font-semibold">
          <Image source={Images.Logo} className="w-14" /> My Card
        </Text>
        <TouchableOpacity className="flex flex-row justify-center bg-white p-2 rounded-lg">
          <Image source={Images.NigeriaFlag} />
          <Text className="text-black text-8 font-medium mx-1">
            Nigeria Naira
          </Text>
          <Image source={Images.TickCircle} className="w-" />
        </TouchableOpacity>
      </View>

      {/* amount view based on toggle */}
      <View className="flex flex-row justify-between items-center py-3">
        <Text className="text-13 font-bold">NGN 20,000.00</Text>
        <FontAwesome
          name="eye"
          size={20}
          color="gray"
          className="bg-white p-2 rounded-full"
        />
      </View>
      <View className="flex-row justify-between items-center mt-2 bg-white rounded-[4px] p-2">
        <View>
          <Text className="text-14 font-semibold text-black">
            Williams Godwin O.
          </Text>
          <Text className="text-12 text-primary font-medium">
            ACC. NO: 314077757
          </Text>
          <Text className="text-10 text-black font-medium">EXP: 04/26</Text>
        </View>
        <View className="flex justify-end items-end">
          <Image source={Images.FiirstBank} className="h-10 w-28" />
          <Text className="text-10 font-medium text-[#2B2B2B]">
            Visa Account
          </Text>
        </View>
      </View>
    </View>
  );
}
