import React  from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultDetail  from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, navigation}) =>
    {
        // return null if result null
        if(!results.length)
            {
                return null;
            }

        return <View style={styles.container}>
            <Text style={styles.title}>
            {title} 
            </Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({ item })=>{
                return (
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('ResultsShow', {id: item.id}) }>
                <ResultDetail results={item}/>
                </TouchableOpacity>
                )
            }}
            />
        </View>
    };

    const styles = StyleSheet.create({
        title:
        {
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginBottom: 5
        },
        container:
        {
            marginBottom: 10
        }


    });

    export default withNavigation(ResultsList);