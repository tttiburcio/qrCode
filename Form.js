import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ navigation }) => {
  const [name, setName] = useState();
  const [obra, setObra] = useState();
  const [gestor, setGestor] = useState();
  const [modelo, setModelo] = useState();
  const [serie, setSerie] = useState();
  const generateQr = () => {
    if (!name || !obra || !gestor || !serie) {
      Alert.alert(
        "Erro!",
        "Preencha todas as informações para gerar o QrCode."
      );
      return false;
    }
    const metadata = {
      name,
      modelo,
      serie,
      gestor,
      obra,
    };
    navigation.navigate("QrCode", { qrValue: JSON.stringify(metadata) });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.container}> */}
          <Text style={styles.inicio}>Cadastro de Equipamentos</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Insira o Nome do Equipamento;"
          />

          <TextInput
            style={styles.input}
            value={modelo}
            onChangeText={setModelo}
            placeholder="Insira o Modelo do Equipamento;"
          />

          <TextInput
            style={styles.input}
            value={serie}
            onChangeText={setSerie}
            placeholder="Insira o IMEI ou N/Série;"
          />

          <TextInput
            style={styles.input}
            value={gestor}
            onChangeText={setGestor}
            placeholder="Insira o Gestor Responsável;"
          />

          <Picker
            selectedValue={obra}
            onValueChange={(value, index) => setObra(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Insira a obra responsável" value="Unknown" />
            <Picker.Item label="Bertioga" value="bertioga" />
            <Picker.Item label="Cubatão" value="cubatao" />
            <Picker.Item label="Copasa" value="copasa" />
            <Picker.Item label="Escritório" value="escritorio" />
            <Picker.Item label="Santos" value="santos" />
            <Picker.Item label="Sanepar" value="sanepar" />
          </Picker>

          <Pressable style={styles.button} onPress={generateQr}>
            <Text style={styles.text}>Gerar Qr Code</Text>
          </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    width: 250,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: "justify",
    fontSize: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  inicio: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
    marginTop:20,
  },
  picker: {
    width: 250,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textAlign: "justify",
    fontSize: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
