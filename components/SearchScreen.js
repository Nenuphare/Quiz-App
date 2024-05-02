import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const SearchScreen = () => {
  const route = useRoute();
  const { message } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(message)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle error state here
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [message]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Résultats de la recherche : {message}
        </Text>
        {isLoading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Text>Recherche en cours...</Text>
            <ActivityIndicator style={{ marginTop: 10 }} size="large" color="tomato" />
          </View>
        ) : (
          <View>
            {/* Afficher les résultats ici */}
            {searchResults.map((result, index) => (
              <Text key={index}>{result}</Text>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
