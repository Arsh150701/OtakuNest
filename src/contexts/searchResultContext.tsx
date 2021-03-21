import React from "react";
import { useContext, createContext, useState } from "react";

const SearchResultContext = createContext({});

export const useSearchResultContext = () => {
  return useContext(SearchResultContext);
};

type Props = {
  children: JSX.Element;
};

const SearchResultProvider = ({ children }: Props) => {
  const [result, setResult] = useState({});

  const value = { result, setResult };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultProvider;
