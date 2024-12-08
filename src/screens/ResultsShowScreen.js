import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  console.log(id);
  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Name */}
      <Text style={styles.name}>{result.name}</Text>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories:</Text>
      {result.categories &&
        result.categories.map((category, index) => (
          <Text key={index} style={styles.text}>
            {category.title}
          </Text>
        ))}

      {/* Address */}
      <Text style={styles.sectionTitle}>Address:</Text>
      {result.location && (
        <Text style={styles.text}>
          {result.location.display_address.join(", ")}
        </Text>
      )}

      {/* Phone */}
      <Text style={styles.sectionTitle}>Phone:</Text>
      <Text style={styles.text}>{result.display_phone || "N/A"}</Text>

      {/* Hours */}
      <Text style={styles.sectionTitle}>Hours:</Text>
      {result.hours &&
        result.hours[0].open.map((time, index) => (
          <Text key={index} style={styles.text}>
            {time.day}: {time.start} - {time.end}
          </Text>
        ))}

      {/* Photos */}
      <Text style={styles.sectionTitle}>Photos:</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
  },
});

export default ResultShowScreen;
