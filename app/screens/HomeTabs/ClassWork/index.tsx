import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../../../libs/Colors';

interface ClassworkProps {
  navigation: any;
}

const ClassWorkScreen: React.FC<ClassworkProps> = ({navigation}) => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Class Work Tab</Text>
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

export default ClassWorkScreen;
