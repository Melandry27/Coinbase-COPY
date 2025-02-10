import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CryptoList = ({ name, icon, reduceName, chart, price, percentage }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.reduceName}>{reduceName}</Text>
      </View>

      <Image source={chart} style={styles.chart} />

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price.toLocaleString()}</Text>
        <Text
          style={[
            styles.percentage,
            percentage > 0 ? styles.positive : styles.negative,
          ]}
        >
          {percentage > 0 ? `↑ ${percentage}%` : `↓ ${percentage}%`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reduceName: {
    fontSize: 12,
    color: "#777",
  },
  chart: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 12,
    fontWeight: "bold",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

export default CryptoList;
