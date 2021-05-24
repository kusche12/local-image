import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

const Card = () => {
    return (
        <View style={styles.card}>
            <Image source={require('./coffee1.jpeg')} style={styles.img} />
            <Text style={styles.text}>Mocha</Text>
        </View>
    )
}



const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    card: {
        width: WIDTH * .7,
        height: WIDTH * .8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        borderRadius: 50,
        overflow: 'hidden',
        paddingBottom: 10,
        backgroundColor: '#267530'
    },
    img: {
        width: WIDTH * .7,
        height: WIDTH * .7,
        resizeMode: 'cover',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
});

export default Card;