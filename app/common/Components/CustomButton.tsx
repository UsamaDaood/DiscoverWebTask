// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import Colors from '../../libs/Colors';
import {PRIMARY_EXO_FONT_SEMI_BOLD_600} from '../../utils/fonts';

interface ButtonProps {
  btnTitle: string;
  onClick: any;
  btnStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const CustomButton = ({
  btnTitle,
  onClick,
  btnStyle,
  titleStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.signUpTouch, btnStyle]}>
        <Text style={[styles.signUpTextStyle, titleStyle]}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  buttonViewstyle: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  signUpTouch: {
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  signUpTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.whiteColor,
  },
});

export default CustomButton;
