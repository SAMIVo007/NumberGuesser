import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import MyButton from "../components/myButton";
import Colors from "../constants/colors";

export default function StartGame({ onUserInput }) {
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
    console.log(num);
    onUserInput(num);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  return (
    <View style={styles.box}>
      <TextInput
        maxLength={2}
        enablesReturnKeyAutomatically={true}
        keyboardType="number-pad"
        style={styles.textInput}
        onChangeText={numberInputHandler}
        value={enteredNum}
        placeholder="Enter a number"
        placeholderTextColor={Colors.placeholderText}
      />

      <View style={{ flexDirection: "row" }}>
        <MyButton onPress={resetInputHandler} outer={styles.flex}>
          Reset
        </MyButton>
        <MyButton onPress={confirmInputHandler} outer={styles.flex}>
          Confirm
        </MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.myMaroon,
    marginTop: 38,
    marginHorizontal: 18,
    borderRadius: 8,
    elevation: 15,
  },

  textInput: {
    borderBottomColor: Colors.myYellow,
    borderBottomWidth: 2,
    paddingBottom: 2,
    color: Colors.myYellow,
    fontSize: 26,
    fontWeight: "bold",
    // height: 45,
    width: "55%",
    marginBottom: 10,
    textAlign: "center",
  },

  flex: {
    flex: 1,
  },
});
