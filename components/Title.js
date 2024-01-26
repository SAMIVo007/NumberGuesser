import { Text, StyleSheet } from "react-native";


export default function Title({children}){
    return(
        <Text style={styles.Title}> {children} </Text>
    );
}


const styles = StyleSheet.create({
  Title: {
    // flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "#ddb52f",
    borderWidth: 2,
    color: "#ddb52f",
    padding: 12,
    borderRadius: 10,
  },
});