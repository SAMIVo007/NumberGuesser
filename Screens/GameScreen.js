import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import MyButton from "../components/myButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import GuessedNumberList from "../components/GuessedNumberList";

function RandomNumber(min, max, exclude) {
  const Rnd = Math.floor(Math.random() * (max - min)) + min;

  if (Rnd === exclude) {
    return RandomNumber(min, max, exclude);
  } else {
    return Rnd;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userInput, onGameOver, roundsCounter }) {
  const initialGuess = RandomNumber(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numbersGuessed, setNumbersGuessed] = useState([initialGuess]);

  useEffect(() => {
    if (userInput === currentGuess) {
      minBoundary = 1;
      maxBoundary = 100;

      onGameOver();
    }
  }, [onGameOver, currentGuess, userInput]);

  function nextGuessHandler(button) {
    if (
      (button === "+" && userInput < currentGuess) ||
      (button === "-" && userInput > currentGuess)
    ) {
      Alert.alert("Don't lie!", "I know you are wrong.", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    if (button === "-") {
      maxBoundary = currentGuess;
      roundsCounter();
    } else if (button === "+") {
      minBoundary = currentGuess + 1;
      roundsCounter();
    }

    const newNumber = RandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newNumber);
    setNumbersGuessed((numbersGuessed) => [newNumber, ...numbersGuessed]);
  }

  const listLength = numbersGuessed.length;

  return (
    <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
      <Title> Your Number is </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.box}>
        <Text style={styles.text}>Higher or lower??</Text>
        <View style={{ flexDirection: "row" }}>
          <MyButton
            onPress={nextGuessHandler.bind(this, "-")}
            outer={styles.flex}
            inner={styles.inner}
          >
            <Ionicons name="md-remove" size={22} />
          </MyButton>
          <MyButton
            onPress={nextGuessHandler.bind(this, "+")}
            outer={styles.flex}
            inner={styles.inner}
          >
            <Ionicons name="md-add" size={22} />
          </MyButton>
        </View>
      </View>

      <View style={{flex:1, padding:8}}>
        <FlatList
          data={numbersGuessed}
          renderItem={(itemData) => (
            <GuessedNumberList
              roundNumber={listLength - itemData.index}
              numberGuessed={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
  },

  flex: {
    flex: 1,
  },

  box: {
    padding: 12,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.myMaroon,
    marginTop: 150,
    marginBottom: 18,
    borderRadius: 8,
    elevation: 15,
  },

  inner: {
    paddingTop: 12,
  },
});
