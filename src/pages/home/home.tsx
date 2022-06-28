import React from "react";
import { Text, View } from "react-native";
import DefaultLayout from "../../layout/default-layout";
import HomeBanner from "./home-banner";
import HomeItemNaivgator from "./home-item-navigator";
import homeStyle from "./home.style";

export default function Home() {

  return (
    <DefaultLayout header={
      <HomeItemNaivgator></HomeItemNaivgator>
    }>
      <View style={homeStyle.home}>
        <HomeBanner></HomeBanner>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
        <Text style={homeStyle.test}>테스트</Text>
      </View>
    </DefaultLayout>
  )
}