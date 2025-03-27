import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  control: any;
  name: string;
  placeholder: string;
  label: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  rules?: object;
}

export default function InputField({
  control,
  name,
  placeholder,
  label,
  keyboardType = "default",
  secureTextEntry = false,
  rules = {},
}: InputFieldProps) {
  return (
    <View className="mt-4">
      <Text className="text-black font-semibold text-13">{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              className={`border border-gray-300 h-[47px] rounded-lg px-4  mt-2 ${
                error ? "border-red-400" : ""
              }`}
            />
            {error && <Text className="text-red-500 pt-1">{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
}

InputField.displayName = 'Input';