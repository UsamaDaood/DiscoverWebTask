import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/HomeScreen';
import OnBoarding from '../screens/OnBoarding';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import ClassGrade from '../screens/Auth/ClassGrade';
import Province from '../screens/Auth/Province';
import Color from '../libs/Colors';
import {PRIMARY_EXO_FONT_MEDIUM_500} from '../utils/fonts';
import {
  IC_CLASSWORK,
  IC_CLASSWORK_UNSELECT,
  IC_EXPLORE,
  IC_EXPLORE_UNSELECT,
  IC_STREAM,
  IC_STREAM_UNSELECT,
} from '../utils/ImageSource';
import ClassWorkScreen from '../screens/HomeTabs/ClassWork';
import StreamScreen from '../screens/HomeTabs/Stream';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ClassGrade" component={ClassGrade} />
      <Stack.Screen name="Province" component={Province} />

      {/* Tabs */}
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function HomeTabs() {
  return (
    <BottomTab.Navigator
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
          navigation.navigate(route.name, {
            screen: route.name,
            params: null,
          });
        },
      })}
      sceneContainerStyle={{backgroundColor: Color.whiteColor}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Color.whiteColor,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarItemStyle: {},
        tabBarLabelStyle: {
          marginTop: 10,
          marginBottom: 5,
          fontSize: 13,
          fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
        },
      }}>
      {/* All Items */}
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  color: focused
                    ? Color.primaryColor
                    : Color.boardingTitleColor,
                  fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
                  fontSize: 13,
                }}>
                Explore
              </Text>
            );
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          // title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={IC_EXPLORE} style={{width: 26, height: 26}} />
            ) : (
              <Image
                source={IC_EXPLORE_UNSELECT}
                style={{width: 26, height: 26}}
              />
            ),
        }}
      />

      {/* Setting Tab Render */}
      <BottomTab.Screen
        name="StreamTab"
        component={StreamScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  color: focused
                    ? Color.primaryColor
                    : Color.boardingTitleColor,
                  fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
                  fontSize: 13,
                }}>
                Stream
              </Text>
            );
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={IC_STREAM} style={{width: 26, height: 26}} />
            ) : (
              <Image
                source={IC_STREAM_UNSELECT}
                style={{width: 26, height: 26}}
              />
            ),
        }}
      />

      <BottomTab.Screen
        name="ClassWork"
        component={ClassWorkScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={{
                  color: focused
                    ? Color.primaryColor
                    : Color.boardingTitleColor,
                  fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
                  fontSize: 13,
                }}>
                ClassWork
              </Text>
            );
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={IC_CLASSWORK} style={{width: 26, height: 26}} />
            ) : (
              <Image
                source={IC_CLASSWORK_UNSELECT}
                style={{width: 26, height: 26}}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default () => <AppNavigator />;

const styles = StyleSheet.create({});
