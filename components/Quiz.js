import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

const Quiz = () => {
  const route = useRoute();
  const url = route.params;
  const [quizData, setQuizData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(encodeURI(url));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuizData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, []);


  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData.correct_answer) {
      setAnsweredCorrectly(true);
    } else {
      setAnsweredCorrectly(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnsweredCorrectly(false);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (!quizData) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No quiz data available</Text>
      </SafeAreaView>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{currentQuestion.question}</Text>
        {answeredCorrectly ? (
          <Text>Your answer is correct!</Text>
        ) : (
          <View>
            <Text>Incorrect. The correct answer is:</Text>
            <Text>{currentQuestion.correct_answer}</Text>
          </View>
        )}
        <TouchableOpacity onPress={handleNextQuestion}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
