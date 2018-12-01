import React from 'react';
import { StyleSheet, Text, View, Image, Button, onPress } from 'react-native';

const Card = ({ key, url, name, gen, like }) => (

<View uniqueID={key} style={styles.card}>
  <Text style={{fontSize: 45, fontWeight: 'bold'}}>{name}</Text>
  <Text style={{fontSize: 25, fontWeight: 'bold', padding: 20}}>Gen: {gen}</Text>

  <Image
    source={{url: url}}
    style={{width: 450, height:450}} 
  />


  <Button 
    onPress={like}
    style={{height: 50, width: 140, fontSize: 50, backgroundColor: 'grey'}}
    title={'like'}
  >


  </Button>

</View>

)

const styles = StyleSheet.create({
  card: {
    height: 850,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;

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