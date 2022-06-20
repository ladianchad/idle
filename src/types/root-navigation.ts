import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParam = {
  home: NavigatorScreenParams<RootParmList> | undefined,
  category: NavigatorScreenParams<RootParmList> | undefined,
  mybag: NavigatorScreenParams<RootParmList> | undefined,
  mypage: NavigatorScreenParams<RootParmList> | undefined,
  search: NavigatorScreenParams<RootParmList> | undefined
}

export type RootParmList = {}