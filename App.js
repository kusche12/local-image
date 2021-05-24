import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./central_perk_logo.jpeg')} style={styles.logo} />
      <Text style={styles.text}>Try some of our most popular flavors!</Text>
      <Card />
    </View>
  );
}



const WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80
  },
  logo: {
    width: WIDTH * .8,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
