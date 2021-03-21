import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Subheading } from "react-native-paper";

type Props = {
  imageUri: string;
  canonicalTitle: string;
};

const ListItem = ({ imageUri, canonicalTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.textContainer}>
        <Subheading>{canonicalTitle}</Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    borderRadius: 15,
    height: 90,
    width: 120,
  },
  textContainer: {
    backgroundColor: "#ecf3f9",
    borderRadius: 15,
    flex: 1,
    height: 70,
    marginLeft: -30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ListItem;
