import axios from "react-native-axios";

const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});

export default instance;