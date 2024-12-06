import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./Components/SearchBar";
import yelp from "./api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to fetch search results
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      console.log("Yelp API Response:", JSON.stringify(response.data, null, 2)); // Log the payload in the console
    } catch (err) {
      console.error("Error fetching data from Yelp:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Run initial search on component load
  useEffect(() => {
    searchApi("restaurants");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Text style={styles.resultsCount}>We have found {results.length} results</Text>
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
