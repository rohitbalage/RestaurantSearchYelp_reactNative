import { useEffect, useState } from "react";
import yelp  from "../api/yelp";

export default () =>
{
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
  
  // call API once when screen render 1st time
    useEffect(() => 
  {
      searchApi('pasta');
  
  }, []);

  return [searchApi, results, errorMessage];

};