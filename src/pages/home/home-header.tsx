import React from "react";
import { Image, Pressable } from "react-native";
import homeStyle from "./home.style";

export default function HomeHeader() {
  return(
    <Pressable>
      <Image style={homeStyle.headerTitleImage} source={require('../../assets/header-logo.png')}/>
    </Pressable>
  )
}