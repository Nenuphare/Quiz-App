// Importing necessary components and modules from Expo, React Native, and React Navigation
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

// Importing custom styles and components
import styles from './styles';
import Home from './components/Home';
import Quiz from './components/Quiz';

// Function component for the Home screen
function HomeScreen(){
  return(
    <View style={styles.container}>
      <Home/>
    </View>
  )
}

// Function component for the Quiz screen
function QuizScreen(){
  return(
    <View style={styles.container}>
      <Quiz/>
    </View>
  )
}

// Default App component
export default function App() {
  const TAB = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* Creating a bottom tab navigator */}
      <TAB.Navigator
        // Customizing tab bar options
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            // Setting icons based on route names
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Quiz") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "tomato", // Color for active tab
          tabBarInactiveTintColor: "gray", // Color for inactive tab
          headerShown: false, // Hiding the header
        })}
      >
        {/* Defining screens for the tab navigator */}
        <TAB.Screen name="Home" component={HomeScreen} />
        <TAB.Screen name="Quiz" component={QuizScreen} />
      </TAB.Navigator>
    </NavigationContainer>
  );
}
