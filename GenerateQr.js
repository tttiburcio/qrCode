import React, { useState } from "react";
import { View, StyleSheet, Share, Button, Image, Pressable, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default ({ route, navigation }) => {
  const [svg, setSvg] = useState();
  const { qrValue, status } = route.params;

  const onShare = async () => {
    try {
      svg?.toDataURL(async (url) => {
        await Share.share({
          message: url
        });
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.stat}>{status}</Text>
      <QRCode value={qrValue} size={300} getRef={setSvg} />
      <Pressable style={styles.button} onPress={onShare}>
        <Text style={styles.press}>Compartilhar</Text>
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  press: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonImageIconStyle: {
    width: 150,
    height: 40,
  },
  stat: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    textAlign: "center",
  },
});
