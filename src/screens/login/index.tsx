import Input from "@/components/custom/input";
import { View, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        width: "75%",
        maxWidth: 350,
        height: "50%",
        backgroundColor: "#ca2323ff",
        justifyContent: "flex-start",
        paddingTop: "25%",
        alignItems: "center",
      }}
    >
      <Input />
      <Input />
    </View>
  );
}
