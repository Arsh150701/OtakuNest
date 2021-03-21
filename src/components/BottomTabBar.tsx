import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption } from "react-native-paper";

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

const BottomTabBar = ({ state, descriptors, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Caption>Explore</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f7fcfe",
    borderRadius: 999,
    bottom: 15,
    left: 10,
    padding: 12,
    position: "absolute",
    right: 10,
  },
});

export default BottomTabBar;
