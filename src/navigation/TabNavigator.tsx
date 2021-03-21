import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreStack from "./ExploreStack";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Explore" component={ExploreStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
