import { NavigatorScreenParams } from "@react-navigation/native"

export type BottomStackParam = {
  home: NavigatorScreenParams<BottomParmList> | undefined,
  category: NavigatorScreenParams<BottomParmList> | undefined,
  mybag: NavigatorScreenParams<BottomParmList> | undefined,
  mypage: NavigatorScreenParams<BottomParmList> | undefined,
  search: NavigatorScreenParams<BottomParmList> | undefined
}

export type BottomParmList = {}