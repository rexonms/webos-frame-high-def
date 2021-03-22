import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { themeStyles } from "../config";
import ScreenFrameHD from "../components/screenFrame";

const App = () => {
  return (
    <View style={themeStyles.app}>
      <ScreenFrameHD />
    </View>
  );
};

export default App;
