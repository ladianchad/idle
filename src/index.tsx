import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParam } from './types/root-navigation';
import Home from './pages/home/home';
import HomeHeader from './pages/home/home-header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeStyle from './pages/home/home.style';
import Category from './pages/category/category';
import MyBag from './pages/mybag/mybag';
import MyPage from './pages/mypage/mypage';
import Search from './pages/search/search';
import { BottomParmList, BottomStackParam } from './types/bottom-navigation';

export default function RootNavigation() {
  return(
    <NavigationContainer>
      <RootNavigationStack.Navigator 
      initialRouteName='home'
      screenOptions={() => ({
        headerShown: true,
        title: '고기팜',
      })}
      >
        <RootNavigationStack.Screen 
          name='home' 
          component={Home}
          options={() => ({
            headerTitle: HomeHeader,
            headerStyle: homeStyle.headerTitle
          })}/>
        
        <RootNavigationStack.Screen 
          name='category' 
          component={Category}
          options={() => ({
          })}/>
        
        <RootNavigationStack.Screen 
          name='mybag'
          component={MyBag}
          options={() => ({
          })}/>
        
        <RootNavigationStack.Screen 
          name='mypage'
          component={MyPage}
          options={() => ({
          })}/>
        
        <RootNavigationStack.Screen 
          name='search'
          component={Search}
          options={() => ({
          })}/>
      </RootNavigationStack.Navigator>
    </NavigationContainer>
  );
}

const RootNavigationStack = createNativeStackNavigator<RootStackParam>();
