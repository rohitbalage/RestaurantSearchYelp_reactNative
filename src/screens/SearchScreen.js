import React, {useState}  from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "./Components/SearchBar";


const SearchScreen = () =>
{

const[term, setTerm] = useState('');


return <View>
    <SearchBar 
    onTermChange = {newTerm => setTerm(newTerm)}/>
    <Text>Search Screen</Text>
    <Text>{term}</Text>
</View>

};

const styles = StyleSheet.create({});
export default SearchScreen;