import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../../libs/Colors';
import {IC_BOARDING} from '../../utils/ImageSource';
import {
  PRIMARY_EXO_FONT_MEDIUM_500,
  PRIMARY_EXO_FONT_REGULAR_400,
  PRIMARY_EXO_FONT_SEMI_BOLD_600,
} from '../../utils/fonts';
import CustomButton from '../../common/Components/CustomButton';

interface OnBoardingProps {
  navigation: any;
}

const OnBoarding: React.FC<OnBoardingProps> = ({navigation}) => {
  const renderSignUpButton = () => {
    return (
      <View style={styles.buttonViewstyle}>
        <CustomButton
          btnTitle="Sign Up"
          btnStyle={{marginHorizontal: 60}}
          onClick={() => {
            navigation.navigate('SignIn');
          }}
        />

        {/* skip Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeTabs');
          }}>
          <Text style={styles.skipTextStyle}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      <Image
        source={IC_BOARDING}
        style={styles.imageStyle}
        resizeMode={'contain'}
      />
      <Text style={styles.titleTextStyle}>Let's find the "A" with us</Text>
      <Text style={styles.signinTextStyle}>
        Please Sign in to view personalized recommendations
      </Text>

      {renderSignUpButton()}
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.screenbg,
  },
  buttonViewstyle: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  imageStyle: {
    width: 324,
    height: 324,
    alignSelf: 'center',
    marginTop: 30,
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
  skipTextStyle: {
    fontFamily: PRIMARY_EXO_FONT_REGULAR_400,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.primaryColor,
    marginTop: 30,
  },
  titleTextStyle: {
    marginBottom: 10,
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.boardingTitleColor,
    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
  },
  signinTextStyle: {
    marginHorizontal: 20,
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.grayDark,
    fontFamily: PRIMARY_EXO_FONT_MEDIUM_500,
  },
});

export default OnBoarding;
