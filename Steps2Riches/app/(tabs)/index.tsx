import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "navy",
      }}
    >
      <Text style = {{ color: "blue"}} >"Hello World" </Text>
      <Text style = {{color: "white"}}>  </Text>
      <Link href="/(tabs)/shops">Open Shop Menu</Link>
      <Link href="/(tabs)/settings">Open Settings Menu</Link>
    </View>
  );
}
