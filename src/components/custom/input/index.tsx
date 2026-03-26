import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

type Props = {
  placeholder?: string;
  title?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function Input(props: Props) {
  return (
    <View style={{ width: "100%", height: "auto", alignItems: "center" }}>
      <Text style={{ marginRight: "55%", marginBottom: "1%", color:"#333333", }}>
        {props.title}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        style={{
          borderWidth: 1,
          borderColor: "#E0E0E0",
          width: "73%",
          backgroundColor: "white",
          borderRadius: 10,
          paddingRight: 5,
        }}
      />
    </View>
  );
}
