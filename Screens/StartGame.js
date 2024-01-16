import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import MyButton from "../components/myButton";

export default function StartGame() {
  const [enteredNum, setEnteredNum] = useState("");

  function numberInputHandler(text) {
    setEnteredNum(text);
  }

  function confirmInputHandler() {
    const num = parseInt(enteredNum); //string to int

    if (num <= 0 || num > 99 || isNaN(num)) {
      Alert.alert(
        "Invalid Number",
        "Entered value has to be a number between 0 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    console.log("valid number");
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  return (
    <View style={styles.app} >
      <TextInput
        maxLength={2}
        enablesReturnKeyAutomatically={true}
        keyboardType="number-pad"
        style={styles.textInput}
        onChangeText={numberInputHandler}
        value={enteredNum}
        placeholder="0"
        placeholderTextColor="#7e07434b"
      />

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <MyButton onPress={resetInputHandler}> Reset </MyButton>
        </View>

        <View style={{ flex: 1 }} >
          <MyButton onPress={confirmInputHandler}> Confirm </MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(330, 95%, 15%)",
    marginTop: 68,
    marginHorizontal: 18,
    borderRadius: 8,
    elevation: 15,
  },

  textInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontSize: 36,
    fontWeight: "bold",
    height: 45,
    width: 50,
    marginBottom: 10,
    textAlign: "center",
  },
});
