import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Account from "./src/components/Account";
import Posts from "./src/components/Posts";
import Redux from "./src/redux/Context";
import { store } from "./src/store";

export default function App() {
  return (
    <Redux store={store}>
      <View style={styles.container}>
       
        <StatusBar style="auto" />
        <Account/>
        <Posts/>
      </View>
    </Redux>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
