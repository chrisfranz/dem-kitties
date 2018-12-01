
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'react-native-axios'
// import { NativeRouter, Route, Link } from 'react-router-native'

import Card from './Card'

export default class Stack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: []
    };
  }

  handleToggleLike = (e) => {
    console.log('meow', e.target)
    alert('meow!')
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
    const cards = this.state.cats.map((cat) => {
      // console.log(cat)
      return <Card key={cat.id} url={cat.image_url} name={cat.cat_name} gen={cat.gen} like={this.handleToggleLike}/>;
    });
    return (
      <ScrollView       
        maximumZoomScale={2}
        minimumZoomScale={1}
        style={{ width: 375 }}
        contentContainerStyle={{ width: 351 }}
      >
        <View >
          {cards}
        </View>
      </ScrollView>
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
