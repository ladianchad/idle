import { useNetInfo } from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, View, Platform, ScrollView, useWindowDimensions, Text } from "react-native";

import { SafeAreaView } from "react-navigation";
import NetworkIssue from "../components/errors/network-issue";
import { RootNavigationProp } from "../types/root-navigation";
import defaultLayoutStyle, { defaultlayoutTabHeight } from "./default-layout.style"

export default function DefaultLayout({
  children,
  header
}: {
  children: React.ReactNode,
  header?: React.ReactNode
}) {
  const netInfo = useNetInfo();
  const useDeimensions = useWindowDimensions();
  const [mainHeight, setMainHeight] = useState<string | number>(0);
  
  useEffect(() => {
    if(Platform.OS != 'web') {
      setMainHeight(useDeimensions.height - defaultlayoutTabHeight);
    }
  });

  return(
    <SafeAreaView style={defaultLayoutStyle.main}
      forceInset={{
        top: 'never',
        bottom: 'always'
      }}
    >
      {header}
      <ScrollView 
          style={{
            ...(defaultLayoutStyle.main),
            height: mainHeight
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          > 
          { netInfo.isConnected ? children : (<NetworkIssue/>)}
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

