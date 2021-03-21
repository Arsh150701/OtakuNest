import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  imageUri: string;
};

const SquareCard = ({ imageUri }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <Text>Naruto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 140,
    marginLeft: 10,
    width: 140,
  },
  image: {
    borderRadius: 15,
    height: "100%",
    width: "100%",
  },
});

export default SquareCard;
