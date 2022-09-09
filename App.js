import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';
export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.label}>Cidade: </Text>
          <TextInput 
            placeholder='digite aqui a cidade ...'
            style={styles.input}
          />
        </View>
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Buscar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bloco}>
            <Tempo />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  bloco:{
    marginTop:30,
    width:'80%',
    marginLeft:'10%',
    
  },
  label:{
    fontSize:20
  },
  titulo:{
    fontSize:30,
    textAlign:'center'
  },
  input:{
    borderBottomWidth:2,
    fontSize:20
  },
  botao:{
    backgroundColor:"black",
  },
  textoBotao:{
    fontSize:20,
    color:"#FFF",
    textAlign:'center'
  }
});

//https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=4daebe67&city_name=Peruibe,SP