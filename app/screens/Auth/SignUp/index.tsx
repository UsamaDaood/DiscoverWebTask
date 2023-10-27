import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import CustomButton from '../../../common/Components/CustomButton';
import CustomInput from '../../../common/Components/CustomInput';
import Colors from '../../../libs/Colors';
import {
  PRIMARY_EXO_FONT_MEDIUM_500,
  PRIMARY_EXO_FONT_REGULAR_400,
  PRIMARY_EXO_FONT_SEMI_BOLD_600,
  PRIMARY_ROBOTO_FONT_LIGHT_300,
  PRIMARY_ROBOTO_FONT_REGULAR_400,
} from '../../../utils/fonts';
import {IC_EYE_OPEN, IC_SIGNIN, ic_SIGNUP} from '../../../utils/ImageSource';

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [revealPass, setRevealPass] = useState<boolean>(true);
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.centered}>
          <Image
            source={ic_SIGNUP}
            style={styles.titleImage}
            resizeMode={'cover'}
          />

          <View style={{marginTop: 10, marginHorizontal: 10}}>
            {/* Render Name */}
            <CustomInput
              placeholder="Your name"
              title="Name"
              onChangeText={(text: string) => {
                console.log('Text: ' + text);
              }}
            />
            {/* Email */}
            <CustomInput
              placeholder="name@gmail.com"
              viewStyle={{marginTop: 10}}
              title="Email address"
              onChangeText={(text: string) => {
                console.log('Text: ' + text);
              }}
            />
            {/* Password */}
            <CustomInput
              placeholder="*************"
              viewStyle={{marginTop: 10}}
              title="Password"
              isPassword={revealPass}
              RightIcon={IC_EYE_OPEN}
              callBackRightImage={() => {
                setRevealPass(!revealPass);
              }}
              onChangeText={(text: string) => {
                console.log('Text: Password ' + text);
              }}
            />

            {/* button Render */}
            <CustomButton
              btnTitle="Sign up"
              onClick={() => {
                navigation.navigate('ClassGrade');
              }}
              btnStyle={{marginTop: 30, marginHorizontal: 60}}
            />
            {/* Don't Account Rendering */}
            <View style={styles.dontaccountView}>
              <Text style={styles.dontAccountText}>You have account?</Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text
                  style={{
                    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
                    fontSize: 18,
                    color: Colors.primaryColor,
                  }}>
                  {' '}
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.screenbg,
  },
  titleImage: {
    width: 266,
    height: 266,
    alignSelf: 'center',
    // marginTop: 10,
  },
  dontaccountView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  dontAccountText: {
    fontFamily: PRIMARY_EXO_FONT_REGULAR_400,
    color: Colors.grayDark,
    fontSize: 18,
  },
});

export default SignUp;
