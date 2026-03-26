import LoginScreen from "@/screens/login";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF8E1"
      }}
    >
      <LoginScreen />
    </View>
  );
}
