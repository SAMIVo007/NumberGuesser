import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function GuessedNumberList({roundNumber, numberGuessed}) {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>{roundNumber}.</Text>
      <Text style={styles.text}> Number Guessed: {numberGuessed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.myYellow,
    borderRadius: 38,
    borderColor: Colors.gradientMaroon,
    borderWidth: 2,
    padding: 12,
    paddingHorizontal: 17,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    width: "100%"
  },

  text: {
    fontWeight: "bold",
  },
});
