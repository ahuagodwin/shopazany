import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Images } from "@/constant/Images";
import Card from "@/components/common/home/Card";
import LogOutModal from "@/components/LogOutModal";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import ProtectedRoute from "@/components/ProtectedRoute";
import { logout } from "@/redux/auth_slice";
import {  Feather } from '@expo/vector-icons/';


const HomeScreen = () => {
  const [ isOpen, setIsOpen] = useState<boolean>(false)

  const toggleSignOut = () => {
      setIsOpen(!isOpen)
  }


  const dispatch = useDispatch();
  const router = useRouter();

  return (

    <ProtectedRoute>
    <View className="flex-1 bg-white">

      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3">
        <View className="flex-row gap-2">
          <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold text-12"> <Feather name="arrow-down-left" size={10} color="white" /> Deposit Money</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold text-12"><Feather name="arrow-up-right" size={10} color="white" /> Transfer Money</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="flex flex-row justify-center items-center gap-1" onPress={() => toggleSignOut()}>
            <Image source={Images.UserIcon} />
            <FontAwesome5 name="chevron-down" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView className="px-4">

          <Card />
        

        {/* Currencies Section */}
        <View className="mt-4 bg-white border border-primary p-2 rounded-lg">
          <Text className="text-18 font-semibold">Currencies</Text>
          <View className="flex-row flex-wrap gap-2 mt-2">
            {[
              { name: "British Pound", amount: "£20,000.00", change: "+2.87%", color: "green", bg: "#FBF4EB" },
              { name: "US Dollar", amount: "$20,000.00", change: "-2.87%", color: "red", bg: "#EBF5EA" },
              { name: "Euro", amount: "€20,000.00", change: "-2.87%", color: "red", bg: "#EAF1F9" },
              { name: "Kenya Shilling", amount: "KES 2000.00", change: "-2.87%", color: "red", bg:"#F9E8EC" },
            ].map((currency, index) => (
              <View key={index} className={`p-3 rounded-md w-[48%]`} style={{ backgroundColor: currency?.bg}}>
                <Text className="font-medium text-9">{currency.name}</Text>
                  <View className="flex flex-row justify-between">
                      <Text className="text-13 font-bold">{currency.amount}</Text>
                      <Text className={`text-11 text-${currency.color}-500`}>{currency.change}</Text>
                  </View>
              </View>
            ))}
          </View>
        </View>

        {/* Transaction History */}
        <View className="mt-4">
          <Text className="text-lg font-semibold">History</Text>
          <View className="bg-white p-4 rounded-lg shadow-md">
            <View className="flex-row justify-between border-b pb-2">
              <Text className="font-medium text-8">Transaction ID</Text>
              <Text className="font-medium text-8">Date  </Text>
              <Text className="font-medium text-8">Amount</Text>
              <Text className="font-medium text-8">Status</Text>
            </View>
            {[
              { id: "984909689GH", date: "3rd September, 2024", amount: "NGN 800,000", status: "Successful", color: "green" },
              { id: "984909689GH", date: "3rd September, 2024", amount: "KES 800,000", status: "Failed", color: "red" },
              { id: "984909689GH", date: "3rd September, 2024", amount: "NGN 800,000", status: "Pending", color: "yellow" },
              { id: "984909689GH", date: "3rd September, 2024", amount: "KES 800,000", status: "Successful", color: "green" },
            ].map((tx, index) => (
              <View key={index} className="flex-row justify-between items-center py-2 border-b">
                <Text className="text-7 w-14">{tx.id}</Text>
                <Text className="text-7 w-18 text-left">{tx.date}</Text>
                <Text className="text-7 w-14 !text-left">{tx.amount}</Text>
                <Text className={`text-${tx.color}-500 text-7 border border-${tx.color}-500 font-medium w-13 text-right p-1 rounded-sm`}>{tx.status}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
        <LogOutModal isVisible={isOpen} onClose={toggleSignOut} onVerify={() => { dispatch(logout
            ()); router.replace("/login"); }}/>
    </View>
    </ProtectedRoute>
  );
};

export default HomeScreen;
