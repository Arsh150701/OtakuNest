import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

type Props = {
  title: string;
};

const HeaderFlatList = ({ title }: Props) => {
  return (
    <View>
      <Title style={styles.title}>{title}</Title>
    </View>
  );
};

export default HeaderFlatList;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
  },
});
