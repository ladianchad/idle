import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text } from "react-native";
import { Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { RootNavigationProp, RootStackParam } from "../types/root-navigation";
import defaultLayoutStyle from "./default-layout.style"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return(
    <SafeAreaView style={defaultLayoutStyle.root}
      forceInset={{
        top: 'never',
        bottom: 'always'
      }}
    >
      <ScrollView style={defaultLayoutStyle.main}> 
        {children}
      </ScrollView>
      <DefaultLayoutBottomTabBar/>
    </SafeAreaView>
  )
}


function DefaultLayoutBottomTabBar() {

  const navigation = useNavigation<RootNavigationProp>();

  const onSearchPressed = () => {
    navigation.navigate('search');
  };

  const onCategoryPressed = () => {
    navigation.navigate('category');
  };

  const onHomePressed = () => {
    navigation.navigate('home');
  };

  const onMyBagPressed = () => {
    navigation.navigate('mybag');
  };

  const onMyPagePressed = () => {
    navigation.navigate('mypage');
  };

  return(
    <View style={defaultLayoutStyle.bottomTabBar}>
      <DefaultLayoutBottomTabIconBox
        onPressed={onSearchPressed}>
        <Image source={require('../assets/logo.png')} style={defaultLayoutStyle.bottomTabIcon}></Image>
      </DefaultLayoutBottomTabIconBox>

      <DefaultLayoutBottomTabIconBox
        onPressed={onCategoryPressed}
      >
        <Image source={require('../assets/logo.png')} style={defaultLayoutStyle.bottomTabIcon}></Image>
      </DefaultLayoutBottomTabIconBox>

      <DefaultLayoutBottomTabIconBox
        onPressed={onHomePressed}
      >
        <Image source={require('../assets/logo.png')} style={defaultLayoutStyle.bottomTabIcon}></Image>
      </DefaultLayoutBottomTabIconBox>

      <DefaultLayoutBottomTabIconBox
        onPressed={onMyBagPressed}>
        <Image source={require('../assets/logo.png')} style={defaultLayoutStyle.bottomTabIcon}></Image>
      </DefaultLayoutBottomTabIconBox>

      <DefaultLayoutBottomTabIconBox
        onPressed={onMyPagePressed}>
        <Image source={require('../assets/logo.png')} style={defaultLayoutStyle.bottomTabIcon}></Image>
      </DefaultLayoutBottomTabIconBox>
    </View>
  )
}

function DefaultLayoutBottomTabIconBox({
  children,
  onPressed
}: {
  children: React.ReactNode,
  onPressed: () => void
}) {
  return(
    <Pressable style={defaultLayoutStyle.bottomTabIconBox}
      onPress={onPressed}
    >
      {children}
    </Pressable>
  )
}

