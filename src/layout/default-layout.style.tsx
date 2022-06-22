import { StyleSheet } from "react-native";

const defaultLayoutStyle = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#EB3300'
  },

  main: {
    width: '100%',
    height: '90%',
    overflow: 'scroll',
    backgroundColor: '#ffffff'
  },

  bottomTabBar: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    display: 'flex',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff'
  },

  bottomTabIconBox: {
    width: '20%',
    height: '100%',
  },

  bottomTabIcon: {
    width: '50%',
    height: '50%',
    margin: '20%',
    resizeMode: 'contain'
  }
});

export default defaultLayoutStyle;