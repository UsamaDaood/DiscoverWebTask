// Global loader for whole application //

import React, {CSSProperties} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Platform,
  ImageStyle,
} from 'react-native';
import Color from '../../libs/Colors';
import {ImageSourcePropType} from 'react-native';
import Colors from '../../libs/Colors';
import {
  PRIMARY_EXO_FONT_MEDIUM_500,
  PRIMARY_ROBOTO_FONT_LIGHT_300,
} from '../../utils/fonts';
interface CustomInputProps {
  title?: string;
  placeholder?: string;
  RightIcon?: ImageSourcePropType;
  callBackRightImage?: any;
  onChangeText?: any;
  keyboardType?: any;
  inputValue?: string;
  isPassword?: boolean;
  viewStyle?: ViewStyle;
  inputStyle?: TextInputProps;
  rightImageStyle?: ImageStyle;
}

const CustomInput = ({
  title,
  placeholder,
  RightIcon,
  callBackRightImage,
  onChangeText,
  keyboardType,
  inputValue,
  isPassword,
  viewStyle,
  inputStyle,
  rightImageStyle,
}: CustomInputProps) => {
  return (
    <View style={[styles.mainView, viewStyle]}>
      {/* Inout Title */}
      <Text style={styles.titleStyle}>{title}</Text>
      {/* Actual Input Part  */}
      <View style={styles.inputViewStyle}>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.inputTextStyle,
            {flex: RightIcon ? 0.95 : 1},
            inputStyle,
          ]}
          value={inputValue}
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          onChangeText={text => {
            onChangeText(text);
          }}
        />
        {RightIcon && (
          <TouchableOpacity style={{flex: 0.05}} onPress={callBackRightImage}>
            <Image
              style={[{width: 14, height: 12}, rightImageStyle]}
              source={RightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  titleStyle: {
    fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
    fontSize: 16,
    color: Colors.grayDark,
  },
  inputViewStyle: {
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    borderColor: Colors.darkGray,
    borderWidth: Platform.OS == 'ios' ? 0.1 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTextStyle: {
    paddingVertical: 5,
    fontFamily: PRIMARY_ROBOTO_FONT_LIGHT_300,
    color: Colors.grayDark,
    flex: 0.95,
    marginRight: 5,
  },
});

export default CustomInput;
