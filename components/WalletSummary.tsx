import React from "react";
import { Text, View } from "react-native";

import { Image } from "react-native";
import IconText from "./IconText";

const WalletSummary = () => {
  const data = [
    {
      text: "Buy",
      icon: "add-circle-outline",
    },
    {
      text: "Sell",
      icon: "remove-circle-outline",
    },
    {
      text: "Send",
      icon: "arrow-up-outline",
    },
    {
      text: "Receive",
      icon: "arrow-down-outline",
    },
    {
      text: "More",
      icon: "ellipsis-horizontal-outline",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.price}>
          <Text style={styles.text}>Total Balance</Text>
          <Text style={styles.text}>$500</Text>
        </View>
        <View style={styles.icon}>
          <Image
            source={require("../assets/graphs/ETH-graph.png")}
            style={{ width: 100, height: 70 }}
          />
        </View>
      </View>
      <View style={styles.containerRowMarginTop}>
        {data.map(({ text, icon }, index) => (
          <IconText key={index} text={text} icon={icon} />
        ))}
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerRowMarginTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  price: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
  },
  icon: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 200,
  },
  separator: {
    borderBottomColor: "#0909090",
    borderBottomWidth: 1,
    marginVertical: 16,
  },
};

export default WalletSummary;
