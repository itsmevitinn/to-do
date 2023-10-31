import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
    </View>
  );
}
