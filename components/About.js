import { useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const About = () => {
  const route = useRoute();
  const { message } = route.params;

  return (
    <SafeAreaView className="flex-1">
      <View className="flex items-center justify-center mt-10">
        <Text className="text-2xl font-semibold">{message}</Text>
      </View>
    </SafeAreaView>
  )
}

export default About
