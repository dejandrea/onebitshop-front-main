import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";

import { ThemeProvider } from "styled-components/native";
import { myTheme } from "./src/styles";

export default function App() {
  return (
    <>
      <Routes />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
