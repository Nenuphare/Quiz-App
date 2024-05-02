import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("Search", { message });
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex items-center mt-10">
        <Text className="font-semibold text-2xl">Accueil</Text>
        <View className="flex flex-row items-center p-2 border border-gray-400 mt-4 rounded-xl">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            className="flex ml-2"
            placeholder="Message"
            onChangeText={setMessage}
            value={message}
          />
        </View>
        <TouchableOpacity className="mt-5" onPress={goToSearch}>
          <Text className="font-bold text-2xl text-red-600">Rechercher</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;