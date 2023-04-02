import {} from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import pages from "./src/Resources/pages";
import Pages from "./src/Components/Pages";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Pages data={pages} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
