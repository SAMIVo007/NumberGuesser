import { View, Text, Pressable, StyleSheet } from "react-native";

export default function MyButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#3a041f" }}
      >
        <Text style={styles.buttontext}> {children} </Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 38,
    margin: 4,
    overflow: "hidden"
  },

  buttonInnerContainer: {
    backgroundColor: "#7e0743b8",
    paddingVertical: 8,
  },

  buttontext: {
    color: "white",
    textAlign: "center",
  },
});
