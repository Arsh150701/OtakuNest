import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Paragraph, Headline } from "react-native-paper";

import { useSearchResultContext } from "../contexts";

const ClickedContentScreen = () => {
  const { result } = useSearchResultContext();
  console.log(result);
  return (
    <View>
      <Image
        style={styles.coverImage}
        source={{ uri: result.attributes.coverImage.large }}
      />
      <View style={styles.textContent}>
        <Headline>{result.attributes.canonicalTitle}</Headline>
        <Paragraph>{result.attributes.synopsis}</Paragraph>
      </View>
    </View>
  );
};

export default ClickedContentScreen;

const styles = StyleSheet.create({
  coverImage: {
    height: 200,
    width: "100%",
  },
  textContent: {
    padding: 10,
  },
});
