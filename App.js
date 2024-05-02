import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import styles from './styles';
import Home from './components/Home';
import Quiz from './components/Quiz';



function HomeScreen(){
  return(
    <View style={styles.container}>
      <Home/>
    </View>
  )
}
function QuizScreen(){
  return(
    <View style={styles.container}>
      <Quiz/>
    </View>
  )
}


export default function App() {
  const TAB = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <TAB.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Quiz") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <TAB.Screen name="Home" component={HomeScreen} />
        <TAB.Screen name="Quiz" component={QuizScreen} />
      </TAB.Navigator>
    </NavigationContainer>
  );
}

