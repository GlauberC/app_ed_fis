import React from 'react';
import {StyleSheet,
        Text,
        View} from 'react-native';


export default class UsuariosCadastrados extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
    }
  }

  render() {
    const { user } = this.state;
    return (
      <View>
        <Text>{user.login}</Text>
      </View>
    );
  }
}



