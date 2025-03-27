import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export default function Checkbox({ label, checked = false, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <TouchableOpacity className="flex-row items-center" onPress={toggleCheckbox}>
      <View className={`w-5 h-5 border ${isChecked ? "border-primary" : "border-gray-400"} rounded-md mr-2 items-center justify-center`}>
        {isChecked && <FontAwesome name="check" size={10} color="#C99213" />}
      </View>
      <Text className="text-gray-600 text-[12.83px] font-medium">{label}</Text>
    </TouchableOpacity>
  );
}
