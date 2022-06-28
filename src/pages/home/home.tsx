import React from "react";
import { Text, View } from "react-native";
import DefaultLayout from "../../layout/default-layout";
import HomeItemNaivgator from "./home-item-navigator";
import homeStyle from "./home.style";

export default function Home() {

  return (
    <DefaultLayout header={
      <HomeItemNaivgator></HomeItemNaivgator>
    }>
      <Text style={homeStyle.test}>테스트 1</Text>
      <Text style={homeStyle.test}>테스트 2</Text>
      <Text style={homeStyle.test}>테스트 3</Text>
      <Text style={homeStyle.test}>테스트 4</Text>
      <Text style={homeStyle.test}>테스트 5</Text>
      <Text style={homeStyle.test}>테스트 6</Text>
      <Text style={homeStyle.test}>테스트 7</Text>
      <Text style={homeStyle.test}>테스트 8</Text>
      <Text style={homeStyle.test}>테스트 9</Text>
      <Text style={homeStyle.test}>테스트 10</Text>
      <Text style={homeStyle.test}>테스트 11</Text>
    </DefaultLayout>
  )
}