import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, } from "react-native";

export default ({ route, navigation }) => {

  const redirectEquip = () => {
    navigation.navigate("Equip", {});
  };
  const redirectVeic = () => {
    navigation.navigate("Veic", {});
  };

  return (
    <View style={styles.container}>
        <Pressable style={styles.button}>
        <Text style={styles.text}onPress={redirectVeic}>VEÍCULOS</Text>
      </Pressable>
      <Pressable style={styles.btn2}>
        <Text style={styles.text} onPress={redirectEquip}>EQUIPAMENTOS</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginBottom: 55,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  btn2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
