import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { initializeApp } from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9PUgu-kXtRlFY5IiZqS2_B18wRopgTMY",
  authDomain: "mealstogo-d6841.firebaseapp.com",
  projectId: "mealstogo-d6841",
  storageBucket: "mealstogo-d6841.appspot.com",
  messagingSenderId: "525505884443",
  appId: "1:525505884443:web:c53eb32ef4df20fc98e3be",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldloaded] = useOswald({ Oswald_400Regular });
  const [latoloaded] = useLato({ Lato_400Regular });

  if (!oswaldloaded || !latoloaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
