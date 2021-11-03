import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import WelcomeScreen from "./screens/WelcomeScreen"

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreen/>
    </NavigationContainer>
  );
}
