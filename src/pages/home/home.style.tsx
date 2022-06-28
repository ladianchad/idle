import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  home: {
    width: '100%',
    height: '100%'
  },
  
  headerTitle: {
    height: 50,
    backgroundColor: '#EB3300',
  },
  
  headerTitleImage: {
    width: 220,
    height: 40,
  },
  
  banner:{
    width: '100%',
    height: '25%',
    backgroundColor: '#000000'
  },

  bannerbutton: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 30
  },

  bannerDot: {
    width: 50,
    height: 20,
    backgroundColor: "#0b0b0b",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20
  },

  bannderDotText: {
    color: "#fff"
  },

  itemNavi: {
    height: 70,
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  
  itemNaviIconBox: {
    width: '16.66666666%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#dddddd',
    borderStyle: 'dashed',
  },

  itemNaviIconLabel: {
    fontSize: 10
  },
  
  itemNaviIcon: {
    width: 34,
    height: 34,
    margin: 5,
    resizeMode: 'contain'
  },

  test: {
    height: 100,
    width: '100%',
    fontSize: 50,
    backgroundColor: '#ddeedd',
    textAlign: 'center',
  }
})

export default homeStyle