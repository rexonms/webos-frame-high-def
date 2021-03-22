import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { themeStyles, hasWebFocusableUI } from "../config";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const ScreenFrameHD = () => (
  <View style={themeStyles.screen}>
    <Text style={{ color: "red" }}>Testing Frame HD</Text>
    <Image
      style={{ height: windowHeight / 4, width: windowWidth / 4 }}
      source={{
        uri: "https://miro.medium.com/max/4800/1*nXqrkkxvLdu1yHN8wEjqEA.png",
      }}
    />
    <Image
      style={{ height: 50, width: 50 }}
      source={{
        uri:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      }}
    />
  </View>
);

export default hasWebFocusableUI
  ? withFocusable()(ScreenFrameHD)
  : ScreenFrameHD;
