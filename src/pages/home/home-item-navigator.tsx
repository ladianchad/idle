import React from "react";
import { Image, Pressable, View, Text } from "react-native";
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
      <HomItemNaigatorIconBox onPressed={onCowPressed} hideBorder={true}>
        <Image source={require('../../assets/animal/cow.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>소고기</Text>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onPigPressed}>
        <Image source={require('../../assets/animal/pig.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>돼지고기</Text>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onChickenPressed}>
        <Image source={require('../../assets/animal/chicken.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>닭·오리고기</Text>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onSheepPressed}>
        <Image source={require('../../assets/animal/sheep.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>양고기</Text>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onGiftPressed}>
        <Image source={require('../../assets/animal/gift.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>선물세트</Text>
      </HomItemNaigatorIconBox>
      <HomItemNaigatorIconBox onPressed={onMealkitPressed}>
        <Image source={require('../../assets/animal/mealkit.png')} style={homeStyle.itemNaviIcon}></Image>
        <Text style={homeStyle.itemNaviIconLabel}>밀키트</Text>
      </HomItemNaigatorIconBox>

    </View>
  )
}

function HomItemNaigatorIconBox({
  children,
  hideBorder,
  onPressed
}: {
  children: React.ReactNode,
  hideBorder?: boolean,
  onPressed: () => void
}) {
  return(
    <Pressable style={[homeStyle.itemNaviIconBox,
      hideBorder? undefined : {
        borderLeftWidth: 2, 
      }
    ]}
      onPress={onPressed}
    >
      {children}
    </Pressable>
  )
}