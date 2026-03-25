import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

export default function Input() {
  return (
    <TextInput
      placeholder="Digite seu e-mail"
      style={{ borderWidth: 1, width: "73%" }}
    />
  );
}
