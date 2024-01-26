import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.myYellow,
    borderRadius: 10,
    padding: deviceWidth < 400 ? 24 : 30,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 32,
    color: Colors.myYellow,
    fontWeight: "bold",
  },
});
