import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface AlertMessageProps {
  message: string;
  type?: "success" | "error" | "info"; // Alert types
  duration?: number; // Default duration (3000ms)
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  message,
  type = "info",
  duration = 3000,
}) => {
  const slideAnim = useRef(new Animated.Value(-50)).current; // Start off-screen
  const opacityAnim = useRef(new Animated.Value(0)).current; // Start invisible

  useEffect(() => {
    // Slide in and fade in
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // Move to visible position
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // Make visible
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-close after duration
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -50, // Slide back up
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0, // Fade out
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, duration);

    return () => clearTimeout(timeout);
  }, [slideAnim, opacityAnim, duration]);

  // Alert styles based on type
  const getAlertStyles = () => {
    switch (type) {
      case "success":
        return "bg-[#F0FDF4] border-b border-[#4ADE80] text-[#15803D]";
      case "error":
        return "bg-red-100 border-b border-red-500 text-red-700";
      case "info":
      default:
        return "bg-blue-100 border-b border-blue-500 text-blue-700";
    }
  };

  return (
    <Animated.View
      style={{
        transform: [{ translateY: slideAnim }],
        opacity: opacityAnim,
        position: "absolute",
        top: 0,
        left: 10,
        right: 10,
        zIndex: 999,
      }}
    >
      <View className={`flex-row items-center p-4 rounded-md ${getAlertStyles()}`}>
        <FontAwesome name="info-circle" size={20} className="mr-2" />
        <Text className="text-sm font-medium">{message}</Text>
      </View>
    </Animated.View>
  );
};

export default AlertMessage;
