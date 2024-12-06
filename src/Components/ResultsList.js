import React  from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultDetail  from "./ResultsDetail";

const ResultsList = ({title, results}) =>
    {
        return <View>
            <Text style={styles.title}>
            {title} 
            </Text>
            <FlatList
            horizontal
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
            fontWeight: 'bold'

        }


    });

    export default ResultsList;