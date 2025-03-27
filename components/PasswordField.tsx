import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Controller } from "react-hook-form";
import { FontAwesome } from "@expo/vector-icons";

interface PasswordFieldProps {
  control: any;
  name: string;
  placeholder: string;
  label: string;
  rules?: object;
}

export default function PasswordField({
  control,
  name,
  placeholder,
  label,
  rules = {},
}: PasswordFieldProps) {
  const [secureText, setSecureText] = useState(true);

  return (
    <View className="mt-4">
      <Text className="text-black font-semibold text-13">{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
          <>
            <View className={`flex-row items-center h-[47px] border ${error ? "border-red-500" : "border-gray-300"} rounded-lg px-4 mt-2`}>
              <TextInput
                placeholder={placeholder}
                secureTextEntry={secureText}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                className="flex-1"
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <FontAwesome name={secureText ? "eye-slash" : "eye"} size={20} color="gray" />
              </TouchableOpacity>
            </View>
            {error && <Text className="text-red-500 pt-1">{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}


PasswordField.displayName = 'Password';