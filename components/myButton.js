import { View, Text, Pressable, StyleSheet } from "react-native";

export default function MyButton({ outer, inner, children, onPress }) {
  return (
    <View style={[styles.buttonOuterContainer, outer]}>
      <Pressable
        style={[styles.buttonInnerContainer, inner]}
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
    overflow: "hidden",
    // flex: 1,
  },

  buttonInnerContainer: {
    backgroundColor: "#7e0743b8",
    paddingVertical: 8,
    paddingHorizontal: 24
  },

  buttontext: {
    color: "white",
    textAlign: "center",
    fontFamily: "courier-new",
  },
});
