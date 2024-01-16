import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGame from "./Screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.rootScreen}
      enabled={false}
    >
      <LinearGradient
        colors={["#7e0743ff", "#ffd034"]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/akinator.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.2 }}
        >
          <StartGame />
        </ImageBackground>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
