import React from "react";
import { View } from "react-native";
import errorPageStyle from "./error-page.style";

export default function ErrorPage({
  children = undefined
} : 
  {
    children: React.ReactNode | undefined
  }
) {
  return(
    <View style={errorPageStyle.default}>
      {children}
    </View>
  );
}