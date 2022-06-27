import React from "react";
import { Text } from "react-native";
import DefaultLayout from "../../layout/default-layout";
import { Image, Pressable } from "react-native";
import homeStyle from "./home.style";

export function HomeHeader() {
  return(
    <Pressable style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image style={homeStyle.headerTitleImage} source={require('../../assets/header-logo.png')}/>
    </Pressable>
  )
}

export default function Home() {

  return (
    <DefaultLayout>
      <Text style={homeStyle.test}>Contents 1</Text>
      <Text style={homeStyle.test}>Contents 2</Text>
      <Text style={homeStyle.test}>Contents 3</Text>
      <Text style={homeStyle.test}>Contents 4</Text>
      <Text style={homeStyle.test}>Contents 5</Text>
      <Text style={homeStyle.test}>Contents 6</Text>
      <Text style={homeStyle.test}>Contents 7</Text>
      <Text style={homeStyle.test}>Contents 8</Text>
      <Text style={homeStyle.test}>Contents 9</Text>
      <Text style={homeStyle.test}>Contents 10</Text>
      <Text style={homeStyle.test}>Contents 11</Text>
    </DefaultLayout>
  )
}