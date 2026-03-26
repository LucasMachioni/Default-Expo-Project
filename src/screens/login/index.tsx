import Button from "@/components/base/button";
import Input from "@/components/custom/input";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        width: "75%",
        maxWidth: 350,
        height: "55%",
        backgroundColor: "#F4B400",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: "25%",
        borderRadius: 15,
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 200, height: 200 }}
      />

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20",
          paddingBottom: 60
        }}
      >
        <Input title="E-mail" placeholder="Digite seu e-mail" />
        <Input title="Senha" placeholder="Digite sua senha" secureTextEntry />
      </View>

      <View>
        <Button
          onPress={() => console.log("clicou")}
          backgroundColor="#BF563A"
        >
          <Text style={{ color: "#fff" }}>Entrar</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
