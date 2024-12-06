import React, { useState } from "react"; 
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults  from "../hook/useResults";
import ResultsList from "../Components/ResultsList";


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  
  const filterResultsByPrice = (price) =>
  {
    // prince == '$'  || '$$' || '$$$'
    return results.filter(results => 
      {
        return results.price == price;
      } );
  };

  return (
    <View>
      <SearchBar
        term={term} // The current search term
        onTermChange={(newTerm) => setTerm(newTerm)} // Update term state on input change
        onTermSubmit={() => searchApi(term)} // Trigger API request on submit (Enter or Search button)
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Text style={styles.resultsCount}>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginHorizontal: 15,
    marginTop: 10,
  },
  resultsCount: {
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default SearchScreen;
