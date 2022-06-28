import React from "react";
import { Image, Pressable, View } from "react-native";
import homeStyle from "./home.style";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../../types/root-navigation";

export default function HomeItemNaivgator() {
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