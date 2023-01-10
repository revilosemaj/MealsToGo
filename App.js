import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

export default function App() {
  const [oswaldloaded] = useOswald({ Oswald_400Regular });
  const [latoloaded] = useLato({ Lato_400Regular });

  if (!oswaldloaded || !latoloaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
