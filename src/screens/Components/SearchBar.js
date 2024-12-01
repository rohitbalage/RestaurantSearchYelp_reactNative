import React  from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () =>
{

return (
<View style={styles.backgroundStyle}>
<Feather name="search" size={25}/>
<TextInput placeholder="Search your restaurant here" style={styles.inputStyle}/>
</View>
);

};

const styles = StyleSheet.create({

backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
},

inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1
}


});
export default SearchBar;