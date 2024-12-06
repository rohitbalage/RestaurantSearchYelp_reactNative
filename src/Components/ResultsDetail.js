import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultDetail = ({results}) =>
{
    return (
    <View>
        <Image  style ={style.image} source={{uri: results.image_url}} />
<Text style={style.name}>{results.name}</Text>
<Text>{results.rating} Stars, {results.review}</Text>        
    </View>);
};

const style = StyleSheet.create({

    image: {
        width: 250,
        height:120,
        borderRadius: 4,
    },

    name:  {
        fontWeight: 'bold',
    }

});

export default ResultDetail;