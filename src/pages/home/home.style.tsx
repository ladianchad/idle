import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  home: {},
  headerTitle: {
    backgroundColor: '#EB3300',
  },
  headerTitleImage: {
    width: 220,
    height: 40,
  },
  itemNavi: {
    height: 70,
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  itemNaviIconBox: {
    width: '16.66%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemNaviIcon: {
    width: 23,
    height: 23,
    resizeMode: 'contain'
  },
  test: {
    height: 100,
    width: '100%',
    fontSize: 50,
    backgroundColor: '#fff00f',
    textAlign: 'center',
  }
})

export default homeStyle