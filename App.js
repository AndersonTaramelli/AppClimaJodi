import { React } from 'react';
import { StyleSheet, Text, View, Image, TextImput} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do clima</Text>
      </View>
        <View style={styles.bloco}>
          <Text style={styles.label}>Cidade: </Text>
            <TextInput 
              placeholder = 'Digite a cidade ...'
              style={styles.input}
            />
        </View>
          <View style={styles.bloco}>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Buscar</Text>
              </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {

  },
  titulo: {

  },
  label: {

  },
  input: {

  },
  botao: {

  },
  textoBotao: {
    
  }
});
