// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import NavigationFlow from "./src/navigation";
import ContextProvider from "./src/contexts";

const defaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
};

const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
};

export default function App() {
  const theme = defaultTheme;
  return (
    <ContextProvider>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <NavigationFlow />
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        </PaperProvider>
      </NavigationContainer>
    </ContextProvider>
  );
}
