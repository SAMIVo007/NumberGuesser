import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";
// import SafeViewAndroid from "./components/SafeViewAndroid";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(1);

  const [fontsLoaded] = useFonts({
    "courier-new": require("./assets/Fonts/CourierNewBold.ttf"),
  });

  useEffect(() => {
    async function loadResourcesAndHideSplashScreen() {
      try {
        // Ensure fonts are loaded
        fontsLoaded;
        // Hide the splash screen
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    loadResourcesAndHideSplashScreen();
  }, []);

  function userInputHandler(userInput) {
    setUserNum(userInput);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function startGameHandler() {
    setRounds(0);
    setUserNum(null);
    setGameOver(false);
  }

  function roundsHandler() {
    setRounds(rounds + 1);
  }

  let screen = <StartGame onUserInput={userInputHandler} />;

  if (userNum) {
    screen = (
      <GameScreen
        userInput={userNum}
        onGameOver={gameOverHandler}
        roundsCounter={roundsHandler}
      />
    );
    if (gameOver) {
      screen = (
        <GameOverScreen
          rounds={rounds}
          userInput={userNum}
          startNewGame={startGameHandler}
        />
      );
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.rootScreen}
      enabled={false}
    >
      <LinearGradient
        colors={[Colors.gradientMaroon, Colors.gradientYellow]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/Images/akinator.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.2 }}
        >
          {/* <View style={styles.SafeArea}>{screen}</View> */}
          <SafeAreaView style={styles.SafeArea}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  SafeArea: {
    flex: 1,
    paddingTop: 32,
  },
});
