import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
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
  const navigation = useNavigation();

  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("10");

  function paramsInURL(cat, diff , num){
    let url = `https://opentdb.com/api.php?amount=${encodeURIComponent(num)}&category=${encodeURIComponent(cat)}&difficulty=${encodeURIComponent(diff)}&type=multiple`;
    return url;
  }

  const goToQuiz = () => {
    navigation.navigate("Quiz", paramsInURL(selectedCategory, selectedDifficulty, selectedNumber) );
  };



  return (
    <SafeAreaView className="flex-1">
      <View className="flex items-center mt-10">
        <Text className="font-semibold text-2xl">Quiz App</Text>
        <View className="flex items-center" style={{marginTop: 30}}>
          <Text className="font-semibold text-l" style={{marginBottom: 10}}>Choisissez la difficulté du Quiz</Text>
          <View style={{ width: 150, borderWidth: 1, borderRadius: 4 }}>
            <Picker
              selectedValue={selectedDifficulty}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDifficulty(itemValue)
              }>
              <Picker.Item label="Any" value="" />
              <Picker.Item label="Easy" value="easy" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Hard" value="hard" />
            </Picker>
          </View>
        </View>
        <View className="flex items-center" style={{marginTop: 30}}>
          <Text className="font-semibold text-l" style={{marginBottom: 10}}>Choisissez la catégorie sur laquel portera le Quiz</Text>
          <View style={{ width: 150, borderWidth: 1, borderRadius: 4 }}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }>
              <Picker.Item label="Any" value="" />
              <Picker.Item label="General Knowledge" value="9" />
              <Picker.Item label="Entertainment: Books" value="10" />
              <Picker.Item label="Entertainment: Films" value="11" />
              <Picker.Item label="Entertainment: Music" value="12" />
              <Picker.Item label="Entertainment: Musicals & Theatres" value="13" />
              <Picker.Item label="Entertainment: Television" value="14" />
              <Picker.Item label="Entertainment: Video Games" value="15" />
              <Picker.Item label="Entertainment: Board Games" value="16" />
              <Picker.Item label="Science & Nature" value="18" />
              <Picker.Item label="Science: Computers" value="19" />
              <Picker.Item label="Science: Mathematics" value="20" />
              <Picker.Item label="Mythology" value="21" />
              <Picker.Item label="Sports" value="22" />
              <Picker.Item label="Geography" value="23" />
              <Picker.Item label="History" value="24" />
              <Picker.Item label="Politics" value="25" />
              <Picker.Item label="Arts" value="26" />
              <Picker.Item label="Celebrities" value="27" />
              <Picker.Item label="Animals" value="28" />
              <Picker.Item label="Vehicles" value="29" />
              <Picker.Item label="Entertainment: Comics" value="30" />
              <Picker.Item label="Sciences: Gadgets" value="31" />
              <Picker.Item label="Entertainment: Japanese Anime & Manga" value="32" />
              <Picker.Item label="Entertainment Cartoon & Animations" value="33" />
            </Picker>
          </View>
        </View>
        <View className="flex items-center" style={{marginTop: 30}}>
          <Text className="font-semibold text-l" style={{marginBottom: 10}}>Choisissez le nombre de questions du Quiz</Text>
          <View style={{ width: 150, borderWidth: 1, borderRadius: 4 }}>
            <Picker
              selectedValue={selectedNumber}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedNumber(itemValue)
              }>
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
              <Picker.Item label="100" value="100" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity  onPress={goToQuiz} style={{marginTop: 30}}>
          <Text className="font-bold text-2xl text-red-600">Aller au Quiz !</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;