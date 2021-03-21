import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";

import axios from "../api";
import HorizontalCardsLayout from "../components/HorizontalCardsLayout";

type Props = {
  navigation: any,
}

const ExploreScreen = ({ navigation }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [animes, setAnimes] = useState();
  const [mangas, setMangas] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const reqAnimes = axios.get("/trending/anime");
        const reqMangas = axios.get("/trending/manga");
        const resAnimes = await reqAnimes;
        const resMangas = await reqMangas;
        setAnimes(resAnimes.data.data);
        setMangas(resMangas.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChangeText = async (text: string) => {
    setQuery(text);
  };

  const handleSearchBarPress = () => {
    navigation.navigate("Search");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Searchbar
        style={styles.searchBar}
        onFocus={handleSearchBarPress}
        placeholder="Search..."
        value={query}
        onChangeText={handleChangeText}
      />
      <HorizontalCardsLayout
        title="Trending Anime"
        data={animes}
        loading={loading}
      />
      <HorizontalCardsLayout
        title="Trending Manga"
        data={mangas}
        loading={loading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  searchBar: {
    borderRadius: 999,
    margin: 10,
  },
});

export default ExploreScreen;
