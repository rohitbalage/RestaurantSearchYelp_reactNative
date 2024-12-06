import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultDetail = ({results}) =>
{
    return (
    <View style = {style.container}>
        <Image  style ={style.image} source={{uri: results.image_url}} />
<Text style={style.name}>{results.name}</Text>
<Text>{results.rating} Stars, {results.review}</Text>        
    </View>);
};

const style = StyleSheet.create({

    container:
    {
      marginLeft: 15  
    },

    image: {
        width: 250,
        height:120,
        borderRadius: 4,
        marginBottom: 5
    },

    name:  {
        fontWeight: 'bold',
    }

});

export default ResultDetail;