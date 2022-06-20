import React from "react";
import { StyleSheet } from "react-native";
import { Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Footer() {
  return(
    <SafeAreaView style={footerStyle.footerContainor}>
      <View style={footerStyle.footer}>
      </View>
    </SafeAreaView>
  )
}

const footerStyle = StyleSheet.create({
  footerContainor: {
    width: '100%',
    height: '20%',
  },
  footer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000'
  }
})