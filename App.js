import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import styles from './styles';
import Home from './components/Home';
import About from './components/About';
import SearchScreen from './components/SearchScreen';



function HomeScreen(){
  return(
    <View style={styles.container}>
      <Home/>
    </View>
  )
}
function AboutScreen(){
  return(
    <View style={styles.container}>
      <About/>
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
            } else if (route.name === "About") {
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
        <TAB.Screen name="About" component={AboutScreen} />
        <TAB.Screen name="Search" component={SearchScreen} />
      </TAB.Navigator>
    </NavigationContainer>
  );
}

