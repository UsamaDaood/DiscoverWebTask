import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../../../libs/Colors';

interface SplashProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    handlingSplash();
  }, []);

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'OnBoarding',
          },
        ],
      });
    }, 2500);
  };

  return (
    <View style={styles.centered}>
      <Image
        source={{}}
        style={{width: 300, height: 250}}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>Discover Web</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
});

export default SplashScreen;
