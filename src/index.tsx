import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParam } from './types/root-navigation';
import Home from './pages/home/home';
import HomeHeader from './pages/home/home-header';
import homeStyle from './pages/home/home.style';
import Category from './pages/category/category';
import MyBag from './pages/mybag/mybag';
import MyPage from './pages/mypage/mypage';
import Search from './pages/search/search';
import NotFound from './pages/default/not-found';

export default function RootNavigation() {
  return(
    <NavigationContainer>
      <RootNavigationStack.Navigator 
      initialRouteName='home'
      screenOptions={() => ({
        headerShown: true,
        title: '고기팜',
        animation: 'none',
      })}
      >
        <RootNavigationStack.Screen 
          name='home' 
          component={Home}
          options={() => ({
            title: '홈',
            headerTitleAlign: 'center',
            headerTitle: HomeHeader,
            headerStyle: homeStyle.headerTitle
          })}/>
        
        <RootNavigationStack.Screen 
          name='category' 
          component={Category}
          options={() => ({
            title: '카테고리'
          })}/>
        
        <RootNavigationStack.Screen 
          name='mybag'
          component={MyBag}
          options={() => ({
            title: '장바구니'
          })}/>
        
        <RootNavigationStack.Screen 
          name='mypage'
          component={MyPage}
          options={() => ({
            title: '마이 페이지'
          })}/>
        
        <RootNavigationStack.Screen 
          name='search'
          component={Search}
          options={() => ({
            title: '검색'
          })}/>
          
        <RootNavigationStack.Screen 
          name='notfound'
          component={NotFound}
          options={() => ({
            title: 'Opps!!'
          })}/>
      </RootNavigationStack.Navigator>
    </NavigationContainer>
  );
}

const RootNavigationStack = createNativeStackNavigator<RootStackParam>();
