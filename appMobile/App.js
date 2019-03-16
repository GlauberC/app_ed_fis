import React from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList  } from 'react-native';
import UsuariosCadastrados from './src/components/UsuariosCadastrados'
const width = Dimensions.get('screen').width;
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      usuarios: [{"id":1,"nome":"Glauber","login":"glauberc","email":"glauber@teste.br"},{"id":2,"nome":"Matheus","login":"matheus","email":"matheus@teste.br"}]
    }
  }

  render() {
    return (
      <View>
        <Image source = {require("./assets/images/edFis.jpg")} style = {styles.imageEdFis}/>
        <Text style={styles.tituloPrincipal}>Aplicação Mobile de EdFis</Text>
        <Text>Usuarios Cadastrados:</Text>
        <FlatList
          keyExtractor = {item => item.id}
          data = {this.state.usuarios}
          renderItem={ ({item}) =>
            <UsuariosCadastrados user = {item}/>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tituloPrincipal: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },imageEdFis:{
    marginTop: 20,
    height: 250,
    width: width

  }
});
