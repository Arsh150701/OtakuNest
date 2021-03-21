import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExploreScreen from "../screens/ExploreScreen";
import SearchScreen from "../screens/SearchScreen";
import ClickedContentScreen from "../screens/ClickedContentScreen";

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Result" component={ClickedContentScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
