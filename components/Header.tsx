import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="menu-outline"
        size={32}
        onPress={() => alert("Menu pressed")}
      />
      <Ionicons
        name="notifications-outline"
        size={32}
        onPress={() => alert("Notification pressed")}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
  },
};

export default Header;
