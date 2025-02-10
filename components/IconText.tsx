import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const IconText = ({ icon, text }) => (
  <View style={styles.container}>
    <View style={styles.roundBlue}>
      <Ionicons name={icon} size={24} color="white" />
    </View>
    <Text>{text}</Text>
  </View>
);

const styles = {
  container: {
    alignItems: "center",
  },
  roundBlue: {
    backgroundColor: "#007AFF",
    borderRadius: 50,
    padding: 8,
    margin: 8,
  },
};

export default IconText;
