import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootNavigationProp = NativeStackNavigationProp<RootStackParam>;

export type RootStackParam = {
  home: NavigatorScreenParams<RootParmList> | undefined,
  category: NavigatorScreenParams<RootParmList> | undefined,
  mybag: NavigatorScreenParams<RootParmList> | undefined,
  mypage: NavigatorScreenParams<RootParmList> | undefined,
  search: NavigatorScreenParams<RootParmList> | undefined,
  notfound: NavigatorScreenParams<RootParmList> | undefined
}

export type RootParmList = {}