import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, CardItem, Container } from 'native-base';

const Card2 = ({ key, url, name, gen }) => (

<Container key={key} style={styles.card}>
  <Content>
    <Card >

      <CardItem>
        <Text>{name}</Text>
        <Text>Gen: {gen}</Text>
      </CardItem>

      <CardItem>
        <Image
          source={{url: url}}
          style={{width: 450, height:450}} 
        />
      </CardItem>

      <CardItem>
      <View style={{width: 475, height: 150, backgroundColor: 'blue'}}>
        <Text>Kitty</Text>
      </View>
      </CardItem>
    </Card>
  </Content>
</Container>
)

const styles = StyleSheet.create({
  card: {
    height: 1050,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card2;

// <ScrollView       
// maximumZoomScale={2}
// minimumZoomScale={1}
// style={{ width: 375 }}
// contentContainerStyle={{ width: 351 }}>
// <View style={styles.container}>
//   <Text>Let me see them Kitties!</Text>

//   <Image
//     source={{url: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1226274.png'}}
//     style={{width: 450, height:450}} 
//   />
//   <View style={{width: 475, height: 150, backgroundColor: 'blue'}}>
//     <Text>Kitty</Text>
//   </View>

// </View>
// <View style={styles.container}>
//   <Text>Let me see them Kitties!</Text>

//   <Image
//     source={{url: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1197367.png'}}
//     style={{width: 450, height:450}} 
//   />
//   <View style={{width: 475, height: 150, backgroundColor: 'powderblue'}} />

// </View>
// <View style={styles.container}>
//   <Text>Let me see them Kitties!</Text>

//   <Image
//     source={{url: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1223511.png'}}
//     style={{width: 450, height:450}} 
//   />
//   <View style={{width: 475, height: 150, backgroundColor: 'powderblue'}} />

// </View>
// </ScrollView>