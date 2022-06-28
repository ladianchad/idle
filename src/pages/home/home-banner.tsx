import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";
import homeStyle from "./home.style";

export default function HomeBanner() {
  return(
    <View style={homeStyle.banner}>
      <Swiper
        from={0}
        loop={true}
        timeout={3}
        springConfig={{
          tension: 1
        }}
        controlsProps={{
          dotsTouchable: true,
          prevPos: 'left',
          nextPos: 'right',
          dotsPos: 'bottom-right',
        }}  
      >
        <Text style={{
          color: '#ffffff'
        }}>배너 1</Text>
        <Text style={{
          color: '#ffffff'
        }}>배너 2</Text>
        <Text style={{
          color: '#ffffff'
        }}>배너 3</Text>
        <Text style={{
          color: '#ffffff'
        }}>배너 4</Text>
        <Text style={{
          color: '#ffffff'
        }}>배너 5</Text>
      </Swiper>
    </View>
  )
}
