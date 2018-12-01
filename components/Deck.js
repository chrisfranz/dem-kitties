
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Container, DeckSwiper } from 'native-base';

import axios from 'react-native-axios'
// import { NativeRouter, Route, Link } from 'react-router-native'

import Card2 from './Card2'

export default class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: []
    };
  }
  componentDidMount() {
    axios.get('http://192.168.0.89:5000/cats')
    .then((response) => response.data)
    .then((cats) => {
      this.setState({ cats: cats })
    })
    .catch(err => console.log(err))
  }
  
  render() {
    const cards = this.state.cats.map((cat, index) => {
      // console.log(cat)
      return <Card2 key={index} url={cat.image_url} name={cat.cat_name} gen={cat.gen}/>;
    });
    return (
      <Container>
        <View >
          <DeckSwiper> 
            dataSource={cards}
          </DeckSwiper> 
        </View>
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     height: 1050,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
