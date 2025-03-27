import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {


  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3">
        <View className="flex-row gap-2">
          <TouchableOpacity className="bg-yellow-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold">Deposit Money</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold">Transfer Money</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="user-circle" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView className="px-4">
        {/* Card Section */}
        <View className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <Text className="text-lg font-semibold">AVC My Card</Text>
          <Text className="text-2xl font-bold">NGN 20,000.00</Text>
          <View className="flex-row justify-between items-center mt-2">
            <View>
              <Text className="text-sm font-medium">Williams Godwin O.</Text>
              <Text className="text-xs text-gray-600">ACC. NO: 314077757</Text>
              <Text className="text-xs text-gray-600">EXP: 04/26</Text>
            </View>
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/79/FirstBank_Logo.png" }}
              className="h-8 w-12"
            />
          </View>
        </View>

        {/* Currencies Section */}
        <View className="mt-4 p-4 bg-gray-100 rounded-lg">
          <Text className="text-lg font-semibold">Currencies</Text>
          <View className="flex-row flex-wrap gap-2 mt-2">
            {[
              { name: "British Pound", amount: "£20,000.00", change: "+2.87%", color: "green" },
              { name: "US Dollar", amount: "$20,000.00", change: "-2.87%", color: "red" },
              { name: "Euro", amount: "€20,000.00", change: "-2.87%", color: "red" },
              { name: "Kenya Shilling", amount: "KES 2000.00", change: "-2.87%", color: "red" },
            ].map((currency, index) => (
              <View key={index} className="bg-white p-3 rounded-md shadow-sm w-[48%]">
                <Text className="font-medium">{currency.name}</Text>
                <Text className="text-lg font-bold">{currency.amount}</Text>
                <Text className={`text-${currency.color}-500`}>{currency.change}</Text>
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
              <Text className="font-medium text-8">Date</Text>
              <Text className="font-medium text-8">Amount</Text>
              <Text className="font-medium text-8">Status</Text>
            </View>
            {[
              { id: "984909689GH", date: "Today • 12:30 PM", amount: "NGN 800,000", status: "Successful", color: "green" },
              { id: "984909689GH", date: "Yesterday • 12:30 PM", amount: "KES 800,000", status: "Failed", color: "red" },
              { id: "984909689GH", date: "23rd Sep, 2024", amount: "NGN 800,000", status: "Pending", color: "yellow" },
            ].map((tx, index) => (
              <View key={index} className="flex-row justify-between py-2 border-b">
                <Text className="text-7">{tx.id}</Text>
                <Text className="text-7">{tx.date}</Text>
                <Text className="text-7">{tx.amount}</Text>
                <Text className={`text-${tx.color}-500 text-7 font-semibold`}>{tx.status}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

export default HomeScreen;
