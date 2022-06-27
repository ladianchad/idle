import { StyleSheet } from "react-native";

export const defaultlayoutTabHeight = 70;

const defaultLayoutStyle = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#EB3300'
  },

  main: {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    backgroundColor: '#ffffff'
  },

  bottomTabBar: {
    width: '100%',
    height: defaultlayoutTabHeight,
    flexDirection: 'row',
    display: 'flex',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff'
  },

  bottomTabIconBox: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bottomTabIcon: {
    width: 34,
    height: 34,
    resizeMode: 'contain'
  }
});

export default defaultLayoutStyle;