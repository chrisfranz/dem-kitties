// import {Container, Content, Text} from 'native-base';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


import Stack from './components/Stack'
// import Deck from './components/Deck'

export default class App extends React.Component {


  render() {
    return (
    
    <View style={styles.container}>
      <Stack />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


