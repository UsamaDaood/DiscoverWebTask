import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import {IC_EYE_OPEN, IC_SIGNIN} from '../../../utils/ImageSource';

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({navigation}) => {
  const [revealPass, setRevealPass] = useState<boolean>(true);
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.centered}>
          <Image
            source={IC_SIGNIN}
            style={styles.titleImage}
            resizeMode={'cover'}
          />

          <View style={{marginTop: 30, marginHorizontal: 10}}>
            {/* Email */}
            <CustomInput
              placeholder="name@gmail.com"
              title="Email address"
              onChangeText={(text: string) => {
                console.log('Text: ' + text);
              }}
            />
            {/* Password */}
            <CustomInput
              placeholder="*************"
              viewStyle={{marginTop: 30}}
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
              btnTitle="Sign in"
              onClick={() => {}}
              btnStyle={{marginTop: 30, marginHorizontal: 60}}
            />
            {/* Don't Account Rendering */}
            <View style={styles.dontaccountView}>
              <Text style={styles.dontAccountText}>Don't have account?</Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text
                  style={{
                    fontFamily: PRIMARY_EXO_FONT_SEMI_BOLD_600,
                    fontSize: 18,
                    color: Colors.primaryColor,
                  }}>
                  {' '}
                  Sign up
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
  titleImage: {
    width: 266,
    height: 266,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SignIn;
