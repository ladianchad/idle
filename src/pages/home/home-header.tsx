import React from "react"
import { Pressable, Image } from "react-native"
import homeStyle from "./home.style"

export default function HomeHeader() {
  return(
    <Pressable style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image style={homeStyle.headerTitleImage} source={require('../../assets/header-logo.png')}/>
    </Pressable>
  )
}