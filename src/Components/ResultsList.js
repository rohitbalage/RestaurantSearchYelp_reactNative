import React  from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultDetail  from "./ResultsDetail";

const ResultsList = ({title, results}) =>
    {
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
                return <ResultDetail results={item} />;
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

    export default ResultsList;