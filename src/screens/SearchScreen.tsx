import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import axios from "../api";
import SearchResultList from "../components/SearchResultList";

const SearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChangeText = async (text: string) => {
    setQuery(text);
    const res = await axios.get(`/anime?filter[text]=${text}`);
    setSearchResult(res.data.data);
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search..."
        value={query}
        onChangeText={handleChangeText}
      />
      <SearchResultList data={searchResult} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    borderRadius: 999,
    margin: 10,
  },
});
