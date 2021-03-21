import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSearchResultContext } from "../contexts";
import ListItem from "./ListItem";

type Props = {
  data: any;
};

const SearchResultList = ({ data }: Props) => {
  const navigation = useNavigation();
  const { result, setResult } = useSearchResultContext();

  const handleListItemPress = (index: number) => {
    setResult(data[index]);
    navigation.navigate("Result");
  };

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity onPress={() => handleListItemPress(index)}>
            <ListItem
              imageUri={item.attributes.posterImage.large}
              canonicalTitle={item.attributes.canonicalTitle}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
});

export default SearchResultList;
