import React from "react";
import { Text, View } from "react-native";
import DefaultLayout from "../../layout/default-layout";
import { Image, Pressable } from "react-native";
import homeStyle from "./home.style";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../../types/root-navigation";

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

function HomeItemNaivgator() {
  const navigation = useNavigation<RootNavigationProp>();

  const onCowPressed = () => {
    navigation.navigate('notfound');
  };

  const onPigPressed = () => {
    navigation.navigate('notfound');
  };

  const onChickenPressed = () => {
    navigation.navigate('notfound');
  };

  const onSheepPressed = () => {
    navigation.navigate('notfound');
  };

  const onGiftPressed = () => {
    navigation.navigate('notfound');
  };

  const onMealkitPressed = () => {
    navigation.navigate('notfound');
  };

  return (
    <View style={homeStyle.itemNavi}>
      <HomItemNaigatorIconBox onPressed={onCowPressed}>
        <Image source={require('../../assets/animal/cow.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onPigPressed}>
        <Image source={require('../../assets/animal/pig.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onChickenPressed}>
        <Image source={require('../../assets/animal/chicken.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onSheepPressed}>
        <Image source={require('../../assets/animal/sheep.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onGiftPressed}>
        <Image source={require('../../assets/animal/gift.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onMealkitPressed}>
        <Image source={require('../../assets/animal/mealkit.png')} style={homeStyle.itemNaviIcon}></Image>
      </HomItemNaigatorIconBox>

    </View>
  )
}

function HomItemNaigatorIconBox({
  children,
  onPressed
}: {
  children: React.ReactNode,
  onPressed: () => void
}) {
  return(
    <Pressable style={homeStyle.itemNaviIconBox}
      onPress={onPressed}
    >
      {children}
    </Pressable>
  )
}

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