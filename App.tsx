import { SafeAreaView, StyleSheet } from "react-native";
import CryptoLists from "./components/CryptoLists";
import Header from "./components/Header";
import WalletSummary from "./components/WalletSummary";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.children}>
        <Header />
        <WalletSummary />
        <CryptoLists />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  children: {
    marginHorizontal: 16,
  },
});
