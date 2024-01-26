import { Button, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import MyButton from "../components/myButton";
import Colors from "../constants/colors";

export default function GameOverScreen({ rounds, userInput, startNewGame }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Title> Game Over! </Title>

      <View style={styles.box}>
        <Text style={styles.text}>
          It took <Text style={styles.highlight}>{rounds}</Text> turns to guess
          your Number
          <Text style={styles.highlight}> {userInput}</Text>
        </Text>
        <MyButton onPress={startNewGame}> Start Again</MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 12,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.myMaroon,
    marginTop: 240,
    marginBottom: 358,
    borderRadius: 8,
    elevation: 15,
  },

  highlight: {
    color: Colors.myYellow,
    fontWeight: "bold",
    fontSize: 22
  },

  text: {
    fontSize: 17,
    color: "white",
    paddingBottom: 12,
  },

});
