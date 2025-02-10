import React from "react";
import { View } from "react-native";
import CryptoList from "./CryptoList";

const CryptoLists = () => {
  const data = [
    {
      name: "Bitcoin",
      icon: require("../assets/icons/BTC-icon.png"),
      reduceName: "BTC",
      chart: require("../assets/graphs/BTC-graph.png"),
      price: 63000,
      percentage: 0.5,
    },
    {
      name: "Ethereum",
      icon: require("../assets/icons/ETH-icon.png"),
      reduceName: "ETH",
      chart: require("../assets/graphs/ETH-graph.png"),
      price: 4000,
      percentage: 2.5,
    },
    {
      name: "Avalanche",
      icon: require("../assets/icons/AVALANCHE-icon.png"),
      reduceName: "AVAX",
      chart: require("../assets/graphs/AVALANCHE-graph.png"),
      price: 100,
      percentage: 5,
    },
    {
      name: "Polkadot",
      icon: require("../assets/icons/POLKADOT-icon.png"),
      reduceName: "DOT",
      chart: require("../assets/graphs/POLKADOT-graph.png"),
      price: 50,
      percentage: 2.5,
    },
    {
      name: "Cardano",
      icon: require("../assets/icons/CARDANO-icon.png"),
      reduceName: "ADA",
      chart: require("../assets/graphs/CARDANO-graph.png"),
      price: 2,
      percentage: 2.5,
    },
    {
      name: "Solana",
      icon: require("../assets/icons/SOLANA-icon.png"),
      reduceName: "SOL",
      chart: require("../assets/graphs/SOLANA-graph.png"),
      price: 200,
      percentage: 2.5,
    },
  ];

  return (
    <View>
      {data.map((cryptoItem, index) => (
        <CryptoList key={index} {...cryptoItem} />
      ))}
    </View>
  );
};

export default CryptoLists;
