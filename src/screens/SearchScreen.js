import React, { useState } from "react"; 
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

      // Log the API response payload: cleaned-up version
      console.log("Relevant Business Data:");
      response.data.businesses.forEach((business) => {
        console.log({
          name: business.name,
          rating: business.rating,
          categories: business.categories.map((c) => c.title),
          phone: business.display_phone,
          address: business.location.display_address.join(", "),
        });
      });

    } catch (err) {
      console.error("Error fetching data from Yelp:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
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
