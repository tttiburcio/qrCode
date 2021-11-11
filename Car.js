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
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default ({ navigation }) => {
  const [marca, setMarca] = useState();
  const [modelo, setModel] = useState();
  const [placa, setPlaca] = useState();
  const [condutor, setCondutor] = useState();
  const [obra, setObra] = useState();
  const [status, setStats] = useState();
  const generateQr = () => {
    // if (!marca || !modelo || !placa || !condutor || !obra || !status) {
    //   Alert.alert(
    //     "Erro!",
    //     "Preencha todas as informações para gerar o QrCode."
    //   );
    //   return false;
    // }
    const metadata = {
      marca,
      modelo,
      placa,
      condutor,
      obra,
      status,
    };
    navigation.navigate("QrCode", { qrValue: JSON.stringify(metadata), status });
  };

  const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.container}> */}
          <Text style={styles.inicio}>Cadastro de Veículos</Text>

          <TextInput
            style={styles.input}
            value={marca}
            onChangeText={setMarca}
            placeholder="Insira a Marca do Veículo;"
          />

          <TextInput
            style={styles.input}
            value={modelo}
            onChangeText={setModel}
            placeholder="Insira o Modelo do Veículo;"
          />

          <TextInput
            style={styles.input}
            value={placa}
            onChangeText={setPlaca}
            placeholder="Insira a Placa do Veículo;"
          />

          <TextInput
            style={styles.input}
            value={condutor}
            onChangeText={setCondutor}
            placeholder="Condutor ou Operador do Veículo;"
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

          <Picker
            selectedValue={status}
            onValueChange={(value, index) => setStats(value)}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Insira a propriedade veícular" value="Unknown" />
            <Picker.Item label="Próprio" value="P" />
            <Picker.Item label="Locado" value="L" />
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
    textAlign: "center",
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
