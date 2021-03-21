import React from "react";
import { View, FlatList } from "react-native";

import HeaderFlatList from "./HeaderFlatList";
import SquareCard from "./SquareCard";

type Props = {
  title: string;
  data: any;
  loading: boolean;
};

const HorizontalCardsLayout = ({ title, data, loading }: Props) => {
  return (
    <View>
      <HeaderFlatList title={title} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SquareCard imageUri={item.attributes.posterImage.large} />;
        }}
      />
    </View>
  );
};

export default HorizontalCardsLayout;
