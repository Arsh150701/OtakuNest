import React from "react";

import ThemeProvider from "./themeContext";
import SearchResultProvider from "./searchResultContext";

type Props = {
  children: JSX.Element;
};

const ContextProvider = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider>
        <SearchResultProvider>{children}</SearchResultProvider>
      </ThemeProvider>
    </>
  );
};

export { useSearchResultContext } from "./searchResultContext";
export default ContextProvider;
